"use client";

import { CpuIcon, SparklesIcon, CloseIcon } from "./icons";

interface WebGpuConsentModalProps {
  isOpen: boolean;
  modelName: string;
  downloadMb: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export const WebGpuConsentModal = ({
  isOpen,
  modelName,
  downloadMb,
  onConfirm,
  onCancel,
}: WebGpuConsentModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 font-extrabold shrink-0">
              <CpuIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-purple-700 block">
                Explicit Consent Confirmation
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Switch to WebGPU Local Inference?
              </h3>
            </div>
          </div>
          <button
            onClick={onCancel}
            aria-label="Close modal"
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Explanation Card */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 space-y-3 text-xs font-medium text-slate-700 leading-relaxed">
          <p>
            You are about to run <strong className="text-slate-900">{modelName}</strong> locally inside your web browser. Please review device resource usage:
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex items-start gap-2.5">
              <span className="text-purple-600 font-extrabold">📥 Internet Data:</span>
              <span>Downloads a <strong>~{downloadMb} MB</strong> model file into your browser cache (1-time download).</span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-blue-600 font-extrabold">🧠 Device Hardware:</span>
              <span>Uses local Device RAM and WebGPU Graphics Processor (GPU) to execute math tensor loops.</span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-extrabold">🔒 Data Privacy:</span>
              <span>100% Offline execution — 0 bytes of your prompts or responses ever leave your computer.</span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-amber-600 font-extrabold">🗑️ Storage Control:</span>
              <span>You can delete downloaded weights anytime using the 1-click <em>Free Up Storage Space</em> button.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all"
          >
            Cancel & Use Instant Cloud
          </button>

          <button
            onClick={onConfirm}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-extrabold transition-all shadow-md inline-flex items-center justify-center gap-1.5"
          >
            <SparklesIcon className="w-4 h-4 text-purple-200" />
            <span>Yes, Switch to WebGPU</span>
          </button>
        </div>
      </div>
    </div>
  );
};
