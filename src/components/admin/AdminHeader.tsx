"use client";

import Link from "next/link";
import { useAdminStore } from "@/stores/use-admin-store";
import { SparklesIcon } from "../directory/icons";

export const AdminHeader = () => {
  const logout = useAdminStore((s) => s.logout);

  return (
    <header className="w-full border-b border-slate-800 bg-slate-950 text-white sticky top-0 z-40">
      <div className="shell flex items-center justify-between py-3.5">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-base text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
              <SparklesIcon className="h-4 w-4" />
            </div>
            <span>ModelVault</span>
          </Link>
          <span className="rounded-full bg-blue-500/20 border border-blue-500/30 px-2.5 py-0.5 text-[0.65rem] font-bold text-blue-400 uppercase tracking-wider">
            Admin Console
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-bold">
          <Link
            href="/models"
            target="_blank"
            className="rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 transition-colors"
          >
            View Live Site ↗
          </Link>
          <button
            onClick={logout}
            className="rounded-lg bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 px-3 py-1.5 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
