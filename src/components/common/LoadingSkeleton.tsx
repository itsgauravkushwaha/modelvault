// 📖 Docs: obsidian/frontend/components/common.md
import React from "react";

/**
 * Simple loading skeleton that matches the app’s glassmorphic design.
 * Uses Tailwind utilities for a subtle pulsating effect.
 */
export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Header placeholder */}
      <div className="h-6 w-1/3 bg-slate-200 rounded animate-pulse" />
      {/* Card grid placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-48 w-full bg-slate-200 rounded animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
