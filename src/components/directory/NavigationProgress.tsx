"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationProgressContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    // Finish loading when route changes
    setIsLoading(false);
    setProgress(100);
    const timer = setTimeout(() => setProgress(0), 300);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercept clicks on links to show instant feedback before Next.js completes fetch
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        anchor.target !== "_blank" &&
        href !== pathname
      ) {
        setIsLoading(true);
        setProgress(30);

        // Incremental simulated progress
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 85) {
              clearInterval(interval);
              return 85;
            }
            return prev + 15;
          });
        }, 150);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  if (!isLoading && progress === 0) return null;

  return (
    <>
      {/* Top Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[99999] h-1 bg-slate-200/50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 transition-all duration-200 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating Loading Indicator Badge */}
      {isLoading && (
        <div className="fixed top-4 right-4 z-[99999] flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 text-xs font-extrabold text-slate-800 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-none">
          <svg
            className="h-3.5 w-3.5 animate-spin text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      )}
    </>
  );
}

export function NavigationProgress() {
  return (
    <Suspense fallback={null}>
      <NavigationProgressContent />
    </Suspense>
  );
}

