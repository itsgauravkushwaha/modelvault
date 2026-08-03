"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminStore } from "@/stores/use-admin-store";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatsOverview } from "@/components/admin/StatsOverview";
import { ModelTable } from "@/components/admin/ModelTable";
import { ModelFormModal } from "@/components/admin/ModelFormModal";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { ImportExportModal } from "@/components/admin/ImportExportModal";

export const AdminView = () => {
  const router = useRouter();
  const isAuthenticated = useAdminStore((s) => s.isAuthenticated);
  const fetchAdminModels = useAdminStore((s) => s.fetchAdminModels);
  const openAddModal = useAdminStore((s) => s.openAddModal);
  const openImportModal = useAdminStore((s) => s.openImportModal);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
    } else {
      fetchAdminModels();
    }
  }, [isAuthenticated, router, fetchAdminModels]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <AdminHeader />

      <main className="flex-1 py-8">
        <div className="shell flex flex-col gap-8">
          {/* Action Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                AI Models Database Dashboard
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Manage persistent AI models, edit specs, add new releases, or export database dumps.
              </p>
            </div>

            <div className="flex items-center gap-2">
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

          {/* Stats Cards */}
          <StatsOverview />

          {/* Table */}
          <ModelTable />
        </div>
      </main>

      {/* Modals */}
      <ModelFormModal />
      <DeleteConfirmModal />
      <ImportExportModal />
    </div>
  );
};
