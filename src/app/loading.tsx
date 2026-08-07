/**
 * Route-level loading UI. Its mere presence wraps the page in a Suspense
 * boundary, which enables streaming. Returns nothing by default — replace with
 * a project loader or skeleton when a route needs a visible loading state.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm">
        {/* Pulsing Spinner & Logo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
          <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-3 shadow-lg shadow-blue-500/30 flex items-center justify-center">
            <svg
              className="h-8 w-8 text-white animate-spin"
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
          </div>
        </div>

        <div>
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
            Loading ModelVault...
          </h2>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Fetching model benchmarks, documentation, and hardware specs
          </p>
        </div>

        {/* Pulse Bar */}
        <div className="h-1.5 w-48 rounded-full bg-slate-200 overflow-hidden mt-2">
          <div className="h-full bg-blue-600 rounded-full animate-pulse w-3/4" />
        </div>
      </div>
    </div>
  );
}

