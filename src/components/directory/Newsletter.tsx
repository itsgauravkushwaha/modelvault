"use client";

import { useState } from "react";
import { CheckIcon, SparklesIcon } from "./icons";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to subscribe. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 text-white shadow-2xl">
      {/* Ambient BG Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-md shadow-lg">
          <SparklesIcon className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          Stay Ahead of Frontier & Open-Weight Model Drops
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
          Join 15,000+ AI engineers and researchers. Get weekly breakdowns of new model releases, benchmark shifts, and local LLM quantization tips.
        </p>

        {/* Feature Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400 py-1">
          <div className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-blue-400" />
            <span>Weekly Release Summaries</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-blue-400" />
            <span>Verified Benchmark Data</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-blue-400" />
            <span>Zero Spam, Unsubscribe Anytime</span>
          </div>
        </div>

        {submitted ? (
          <div className="mt-2 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 px-6 py-3.5 text-xs font-bold text-emerald-300 backdrop-blur-md">
            ✓ You&apos;re subscribed! We&apos;ll keep you posted when new models release.
          </div>
        ) : (
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address..."
                className="flex-1 rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-3.5 text-xs text-white font-semibold placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 shadow-inner"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 px-6 py-3.5 text-xs font-bold text-white transition-all shadow-lg hover:shadow-blue-500/25"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {errorMsg && (
              <p className="mt-2 text-[0.7rem] font-bold text-rose-400 text-left">{errorMsg}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
