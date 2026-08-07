export default function ModelDetailLoading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="flex-1 py-8">
        <div className="shell max-w-5xl">
          {/* Breadcrumb Skeleton */}
          <div className="h-4 w-36 bg-slate-200 rounded animate-pulse mb-6" />

          {/* Model Main Card Header Skeleton */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-8 animate-pulse">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-24 bg-blue-100 rounded-md" />
                  <div className="h-4 w-16 bg-slate-100 rounded-md" />
                </div>
                <div className="h-9 w-64 bg-slate-200 rounded-xl" />
                <div className="h-3 w-48 bg-slate-100 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-9 w-28 bg-blue-200 rounded-xl" />
                <div className="h-9 w-20 bg-slate-100 rounded-xl" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <div className="h-4 w-full bg-slate-100 rounded" />
              <div className="h-4 w-5/6 bg-slate-100 rounded" />
            </div>

            {/* Specs Strip Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
              <div className="h-8 bg-slate-100 rounded-lg" />
              <div className="h-8 bg-slate-100 rounded-lg" />
              <div className="h-8 bg-slate-100 rounded-lg" />
              <div className="h-8 bg-slate-100 rounded-lg" />
            </div>
          </div>

          {/* Details Content Grid Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Benchmarks Skeleton */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse flex flex-col gap-4">
                <div className="h-5 w-48 bg-slate-200 rounded mb-2" />
                <div className="h-4 w-full bg-slate-100 rounded" />
                <div className="h-4 w-full bg-slate-100 rounded" />
                <div className="h-4 w-full bg-slate-100 rounded" />
              </div>

              {/* Hardware Requirements Skeleton */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse flex flex-col gap-3">
                <div className="h-5 w-56 bg-slate-200 rounded" />
                <div className="h-16 w-full bg-emerald-50 rounded-xl" />
              </div>

              {/* Strengths & Weaknesses Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse h-40" />
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse h-40" />
              </div>

              {/* Code Snippet Skeleton */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-md animate-pulse h-56" />
            </div>

            {/* Right Column Skeleton */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse h-32" />
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse h-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
