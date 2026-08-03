// 📖 Docs: obsidian/frontend/components/common.md
import React from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
      <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
      {description && (
        <p className="text-sm text-slate-600 max-w-md">{description}</p>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
