"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminStore } from "@/stores/use-admin-store";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatsOverview } from "@/components/admin/StatsOverview";
import { ModelTable } from "@/components/admin/ModelTable";
import { ModelFormModal } from "@/components/admin/ModelFormModal";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { ImportExportModal } from "@/components/admin/ImportExportModal";

interface Subscriber {
  id: string | number;
  email: string;
  subscribed_at?: string;
}

interface ContactMessage {
  id: string | number;
  name?: string;
  email: string;
  subject?: string;
  message?: string;
  created_at?: string;
}

export const AdminView = () => {
  const router = useRouter();
  const isAuthenticated = useAdminStore((s) => s.isAuthenticated);
  const fetchAdminModels = useAdminStore((s) => s.fetchAdminModels);
  const openAddModal = useAdminStore((s) => s.openAddModal);
  const openImportModal = useAdminStore((s) => s.openImportModal);

  const [activeTab, setActiveTab] = useState<"models" | "subscribers" | "messages">("models");
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
    } else {
      fetchAdminModels();
    }
  }, [isAuthenticated, router, fetchAdminModels]);

  useEffect(() => {
    if (isAuthenticated) {
      setLoadingData(true);
      const passcode = sessionStorage.getItem("admin_passcode") || localStorage.getItem("admin_passcode") || "";
      const headers: Record<string, string> = passcode ? { "x-admin-passcode": passcode } : {};

      Promise.all([
        fetch("/api/admin/subscribers", { headers }).then((res) => res.json()).catch(() => ({ subscribers: [] })),
        fetch("/api/admin/contacts", { headers }).then((res) => res.json()).catch(() => ({ contacts: [] })),
      ]).then(([subData, contactData]) => {
        if (subData.subscribers) setSubscribers(subData.subscribers);
        if (contactData.contacts) setMessages(contactData.contacts);
        setLoadingData(false);
      });
    }
  }, [isAuthenticated]);

  const [syncing, setSyncing] = useState(false);
  const [syncMsg, setSyncMsg] = useState("");

  const handleSyncNow = async () => {
    setSyncing(true);
    setSyncMsg("");
    try {
      const passcode = sessionStorage.getItem("admin_passcode") || localStorage.getItem("admin_passcode") || "";
      const headers: Record<string, string> = passcode ? { "x-admin-passcode": passcode } : {};
      const res = await fetch("/api/cron/sync-models", { headers });
      const data = await res.json();
      if (res.ok && data.success) {
        setSyncMsg(`Sync Complete! ${data.updatedCount} models updated, ${data.newlyAddedCount} new models added.`);
        fetchAdminModels();
      } else {
        setSyncMsg(data.error || "Failed to run sync. Please try again.");
      }
    } catch {
      setSyncMsg("Network error triggering sync.");
    } finally {
      setSyncing(false);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <AdminHeader />

      <main className="flex-1 py-8">
        <div className="shell flex flex-col gap-6">
          {/* Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                ModelVault Admin Panel
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Manage 11,000+ AI models, newsletter subscriber lists, and contact enquiries.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSyncNow}
                disabled={syncing}
                className="rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 disabled:opacity-50 text-purple-700 px-4 py-2 text-xs font-bold shadow-sm transition-all"
              >
                {syncing ? "🔄 Syncing Platforms..." : "🔄 Sync All Platforms"}
              </button>
              <button
                onClick={openImportModal}
                className="rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 px-4 py-2 text-xs font-bold shadow-sm transition-all"
              >
                Export DB
              </button>
              <button
                onClick={openAddModal}
                className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-xs font-bold shadow-sm transition-all"
              >
                + Add New Model
              </button>
            </div>
          </div>

          {syncMsg && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 text-xs font-extrabold text-emerald-700 shadow-sm flex items-center justify-between">
              <span>{syncMsg}</span>
              <button onClick={() => setSyncMsg("")} className="text-emerald-500 hover:text-emerald-800 font-bold ml-2">✕</button>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveTab("models")}
              className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                activeTab === "models"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              🤖 AI Models ({useAdminStore.getState().models.length || "11,000+"})
            </button>
            <button
              onClick={() => setActiveTab("subscribers")}
              className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                activeTab === "subscribers"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              📧 Newsletter Subscribers ({subscribers.length})
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                activeTab === "messages"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              📩 Contact Messages ({messages.length})
            </button>
          </div>

          {/* TAB 1: MODELS */}
          {activeTab === "models" && (
            <>
              <StatsOverview />
              <ModelTable />
            </>
          )}

          {/* TAB 2: SUBSCRIBERS */}
          {activeTab === "subscribers" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-extrabold text-slate-900">
                  Email Newsletter Subscribers ({subscribers.length})
                </h2>
                <span className="text-[0.65rem] font-bold text-emerald-600 bg-emerald-50 rounded-full px-3 py-1">
                  Saved in Supabase
                </span>
              </div>

              {loadingData ? (
                <p className="text-xs text-slate-400 font-bold py-6 text-center">Loading subscribers...</p>
              ) : subscribers.length === 0 ? (
                <div className="p-8 text-center border border-dashed border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-500">No subscribers yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[0.65rem]">
                        <th className="py-3 px-4">#</th>
                        <th className="py-3 px-4">Email Address</th>
                        <th className="py-3 px-4">Subscribed Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                      {subscribers.map((sub, idx) => (
                        <tr key={sub.id || idx} className="hover:bg-slate-50">
                          <td className="py-3.5 px-4 text-slate-400 font-extrabold">{idx + 1}</td>
                          <td className="py-3.5 px-4 font-bold text-slate-900">{sub.email}</td>
                          <td className="py-3.5 px-4 text-slate-500">
                            {sub.subscribed_at ? new Date(sub.subscribed_at).toLocaleString() : "Recently"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CONTACT MESSAGES */}
          {activeTab === "messages" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-extrabold text-slate-900">
                  Contact Form Enquiries ({messages.length})
                </h2>
                <span className="text-[0.65rem] font-bold text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                  Incoming Enquiries
                </span>
              </div>

              {loadingData ? (
                <p className="text-xs text-slate-400 font-bold py-6 text-center">Loading messages...</p>
              ) : messages.length === 0 ? (
                <div className="p-8 text-center border border-dashed border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-500">No contact messages yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={msg.id || idx} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 text-sm">{msg.name || "Anonymous User"}</span>
                          <span className="text-xs font-bold text-blue-600">({msg.email})</span>
                        </div>
                        <span className="text-[0.65rem] font-bold text-slate-400">
                          {msg.created_at ? new Date(msg.created_at).toLocaleString() : "Recently"}
                        </span>
                      </div>
                      {msg.subject && (
                        <p className="text-xs font-extrabold text-slate-800 mb-1">Subject: {msg.subject}</p>
                      )}
                      <p className="text-xs text-slate-600 font-medium bg-white p-3 rounded-lg border border-slate-200/60 leading-relaxed">
                        {msg.message || "No message content."}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      <ModelFormModal />
      <DeleteConfirmModal />
      <ImportExportModal />
    </div>
  );
};
