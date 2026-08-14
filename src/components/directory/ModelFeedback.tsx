"use client";

import { useState, useEffect, useCallback } from "react";

interface FeedbackAggregate {
  total: number;
  helpful: number;
  unhelpful: number;
  helpfulPercent: number;
  topUseCases: string[];
}

interface ModelFeedbackProps {
  slug: string;
}

export const ModelFeedback: React.FC<ModelFeedbackProps> = ({ slug }) => {
  const [aggregate, setAggregate] = useState<FeedbackAggregate | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showUseCaseInput, setShowUseCaseInput] = useState(false);
  const [voteValue, setVoteValue] = useState<boolean | null>(null);
  const [useCase, setUseCase] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const storageKey = `mv_feedback_${slug}`;

  // Check if user already voted
  useEffect(() => {
    try {
      const existing = localStorage.getItem(storageKey);
      if (existing) {
        setHasVoted(true);
        setSubmitted(true);
      }
    } catch {
      // localStorage unavailable
    }
  }, [storageKey]);

  // Fetch aggregate on mount
  const fetchAggregate = useCallback(async () => {
    try {
      const res = await fetch(`/api/feedback?slug=${encodeURIComponent(slug)}`);
      if (res.ok) {
        const json = await res.json();
        setAggregate(json.data);
      }
    } catch {
      // Silent fail — feedback is non-critical
    }
  }, [slug]);

  useEffect(() => {
    fetchAggregate();
  }, [fetchAggregate]);

  const handleVote = (helpful: boolean) => {
    setVoteValue(helpful);
    setShowUseCaseInput(true);
  };

  const handleSubmit = async () => {
    if (voteValue === null) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modelSlug: slug,
          helpful: voteValue,
          useCase: useCase.trim() || undefined,
        }),
      });

      if (res.ok) {
        localStorage.setItem(storageKey, JSON.stringify({ helpful: voteValue, ts: Date.now() }));
        setHasVoted(true);
        setSubmitted(true);
        setShowUseCaseInput(false);
        // Refresh aggregate
        await fetchAggregate();
      }
    } catch {
      // Silent fail
    } finally {
      setSubmitting(false);
    }
  };

  const skipUseCase = async () => {
    setUseCase("");
    await handleSubmit();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Aggregate Results Bar */}
      {aggregate && aggregate.total > 0 && (
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-slate-700">Community Feedback</span>
            <span className="text-slate-500">
              {aggregate.total} {aggregate.total === 1 ? "response" : "responses"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${aggregate.helpfulPercent}%` }}
              />
            </div>
            <span className="text-sm font-extrabold text-emerald-600 tabular-nums shrink-0">
              {aggregate.helpfulPercent}%
            </span>
          </div>
          <p className="text-[0.7rem] font-semibold text-slate-500 mt-1.5">
            {aggregate.helpful} of {aggregate.total} users found this model useful
          </p>

          {/* Top reported use cases */}
          {aggregate.topUseCases.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-100">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-400 block mb-1.5">
                What people use it for
              </span>
              <div className="flex flex-wrap gap-1.5">
                {aggregate.topUseCases.map((uc) => (
                  <span
                    key={uc}
                    className="rounded-md bg-blue-50 border border-blue-100 px-2 py-0.5 text-[0.7rem] font-semibold text-blue-700"
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Vote Prompt */}
      {!submitted ? (
        <div>
          {!showUseCaseInput ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  Did this model work for you?
                </h3>
                <p className="text-[0.7rem] font-medium text-slate-500 mt-0.5">
                  Your feedback helps others find the right model.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleVote(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-700 transition-all"
                >
                  <span>👍</span>
                  <span>Yes, it worked</span>
                </button>
                <button
                  onClick={() => handleVote(false)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-red-50 border border-red-200 hover:bg-red-100 px-4 py-2 text-xs font-bold text-red-700 transition-all"
                >
                  <span>👎</span>
                  <span>No, it didn't</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold text-slate-700">
                {voteValue ? "Great to hear! " : "Sorry about that. "}
                What did you use it for? <span className="text-slate-400 font-medium">(optional)</span>
              </p>
              <input
                type="text"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="e.g. Summarizing legal contracts, generating product images..."
                maxLength={500}
                className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2 text-xs font-bold text-white transition-all shadow-sm disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Feedback"}
                </button>
                <button
                  onClick={skipUseCase}
                  disabled={submitting}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors disabled:opacity-50"
                >
                  Skip
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-[0.65rem]">
            ✓
          </span>
          <span>Thanks for your feedback! It helps the community find the right models.</span>
        </div>
      )}
    </div>
  );
};
