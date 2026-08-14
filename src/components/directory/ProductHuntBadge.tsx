"use client";

import Link from "next/link";
import { SparklesIcon } from "./icons";

export const ProductHuntBadge = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white py-2 px-4 text-center text-xs font-bold shadow-md flex items-center justify-center gap-2">
      <SparklesIcon className="w-4 h-4 text-amber-200 animate-pulse" />
      <span>We are featured on Product Hunt today!</span>
      <a
        href="https://www.producthunt.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 rounded-lg bg-white/20 hover:bg-white/30 px-3 py-1 text-[0.7rem] uppercase tracking-wider font-extrabold text-white transition-all underline underline-offset-2"
      >
        Support Us & Vote on Product Hunt ↗
      </a>
    </div>
  );
};
