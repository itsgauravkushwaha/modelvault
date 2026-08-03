"use client";

import Link from "next/link";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { Header } from "@/components/directory/Header";
import { Footer } from "@/components/directory/Footer";
import { AvailabilityBadge, PricingBadge } from "@/components/directory/Badges";
import { CloseIcon, CompareIcon } from "@/components/directory/icons";

export const CompareView = () => {
  const compareList = useDirectoryStore((s) => s.compareList);
  const allModels = useDirectoryStore((s) => s.allModels);
  const removeFromCompare = useDirectoryStore((s) => s.removeFromCompare);
  const clearCompare = useDirectoryStore((s) => s.clearCompare);
  const toggleCompare = useDirectoryStore((s) => s.toggleCompare);

  const comparedModels = compareList
    .map((slug) => allModels.find((m) => m.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-blue-600 tracking-wider mb-1">
                <CompareIcon className="w-4 h-4" /> Side-by-Side Matrix
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Model Comparison
              </h1>
            </div>

            {comparedModels.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs font-bold text-slate-600 hover:text-red-600 transition-colors"
              >
                Clear all selections
              </button>
            )}
          </div>

          {/* Model Selector Bar */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm mb-8">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
              Add models to comparison (Max 4):
            </h3>
            <div className="flex flex-wrap gap-2">
              {allModels.slice(0, 10).map((model) => {
                const isAdded = compareList.includes(model.slug);
                return (
                  <button
                    key={model.slug}
                    onClick={() => toggleCompare(model.slug)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                      isAdded
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {isAdded ? "✓ " : "+ "}
                    {model.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Comparison Matrix Table */}
          {comparedModels.length > 0 ? (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 font-extrabold text-slate-400 uppercase tracking-wider w-44">
                      Specification
                    </th>
                    {comparedModels.map((model) => (
                      <th key={model!.slug} className="p-4 min-w-[220px]">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[0.65rem] font-bold text-blue-600 uppercase block">
                              {model!.provider}
                            </span>
                            <span className="text-base font-extrabold text-slate-900 block">
                              {model!.name}
                            </span>
                          </div>
                          <button
                            onClick={() => removeFromCompare(model!.slug)}
                            className="rounded-full p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
                          >
                            <CloseIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {/* Type */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">Model Type</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4 text-slate-900 font-bold">{m!.type}</td>
                    ))}
                  </tr>

                  {/* Pricing */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">Pricing</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4">
                        <PricingBadge pricing={m!.pricing} />
                        <div className="mt-1 text-[0.7rem] text-slate-500 font-semibold">{m!.pricingDetails}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Context Window */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">Context Window</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4 font-extrabold text-slate-900 text-sm">{m!.contextWindow}</td>
                    ))}
                  </tr>

                  {/* Availability */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">Availability</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4">
                        <AvailabilityBadge availability={m!.availability} />
                      </td>
                    ))}
                  </tr>

                  {/* License */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">License</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4 text-slate-800 font-semibold">{m!.license}</td>
                    ))}
                  </tr>

                  {/* Hardware */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">Local VRAM / HW</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4 text-slate-700">
                        {m!.hardwareRequirements || "Cloud API standard"}
                      </td>
                    ))}
                  </tr>

                  {/* Primary Benchmark */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">Key Benchmark</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4">
                        {m!.benchmarks[0] ? (
                          <div className="font-extrabold text-blue-600 text-sm">
                            {m!.benchmarks[0].name}: {m!.benchmarks[0].score}
                          </div>
                        ) : (
                          "N/A"
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Strengths */}
                  <tr>
                    <td className="p-4 font-bold text-slate-500 bg-slate-50/50">Top Strengths</td>
                    {comparedModels.map((m) => (
                      <td key={m!.slug} className="p-4">
                        <ul className="list-disc list-inside text-slate-700 space-y-1">
                          {m!.strengths.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mx-auto mb-4">
                <CompareIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No models selected for comparison</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-6">
                Click the &quot;Compare&quot; button on any model card or select models from the list above to compare specifications side-by-side.
              </p>
              <Link
                href="/models"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-bold shadow-sm"
              >
                Browse Models
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
