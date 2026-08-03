"use client";

import { useAdminStore } from "@/stores/use-admin-store";
import { CloseIcon } from "../directory/icons";

export const ImportExportModal = () => {
  const isOpen = useAdminStore((s) => s.isImportModalOpen);
  const closeModal = useAdminStore((s) => s.closeImportModal);
  const models = useAdminStore((s) => s.models);

  if (!isOpen) return null;

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(models, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `modelvault_db_dump_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <h3 className="text-base font-extrabold text-slate-900">
            Database Import & Export
          </h3>
          <button onClick={closeModal} className="rounded-full p-1 text-slate-400 hover:bg-slate-100">
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-xs font-medium text-slate-700">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h4 className="font-extrabold text-slate-900 text-sm mb-1">Export Complete Database</h4>
            <p className="text-slate-500 mb-3">Download a full JSON backup of all {models.length} AI models currently stored in the database.</p>
            <button
              onClick={handleExportJSON}
              className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-bold shadow-sm transition-all"
            >
              Export DB Dump (.JSON)
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-4 mt-4 border-t border-slate-100">
          <button
            onClick={closeModal}
            className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
