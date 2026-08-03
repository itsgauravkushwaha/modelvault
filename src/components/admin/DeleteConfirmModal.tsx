"use client";

import { useState } from "react";
import { useAdminStore } from "@/stores/use-admin-store";
import { CloseIcon } from "../directory/icons";

export const DeleteConfirmModal = () => {
  const isOpen = useAdminStore((s) => s.isDeleteModalOpen);
  const selectedModel = useAdminStore((s) => s.selectedModel);
  const closeDeleteModal = useAdminStore((s) => s.closeDeleteModal);
  const deleteModel = useAdminStore((s) => s.deleteModel);

  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen || !selectedModel) return null;

  const handleDelete = async () => {
    setIsDeleting(true);
    setErrorMsg("");

    const result = await deleteModel(selectedModel.slug);
    setIsDeleting(false);

    if (result.success) {
      closeDeleteModal();
    } else {
      setErrorMsg(result.error || "Failed to delete model");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <h3 className="text-base font-extrabold text-red-600">
            Confirm Model Deletion
          </h3>
          <button onClick={closeDeleteModal} className="rounded-full p-1 text-slate-400 hover:bg-slate-100">
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {errorMsg && (
          <div className="mb-4 rounded-xl bg-red-50 p-3 text-xs font-bold text-red-700">
            {errorMsg}
          </div>
        )}

        <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
          Are you sure you want to permanently delete <strong className="text-slate-900">{selectedModel.name}</strong> (<code className="text-red-600">{selectedModel.slug}</code>) from the database? This action cannot be undone.
        </p>

        <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-4">
          <button
            onClick={closeDeleteModal}
            className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="rounded-lg bg-red-600 hover:bg-red-700 text-white px-5 py-2 text-xs font-bold shadow-sm transition-all disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : "Permanently Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};
