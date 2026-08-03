import { Availability, PricingType } from "@/types/model";
import { CloudIcon, CpuIcon } from "./icons";

export const PricingBadge: React.FC<{ pricing: PricingType }> = ({ pricing }) => {
  switch (pricing) {
    case "free":
      return (
        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[0.7rem] font-bold text-emerald-700 border border-emerald-200">
          Free
        </span>
      );
    case "freemium":
      return (
        <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-0.5 text-[0.7rem] font-bold text-sky-700 border border-sky-200">
          Freemium
        </span>
      );
    case "open-weights":
      return (
        <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-0.5 text-[0.7rem] font-bold text-purple-700 border border-purple-200">
          Open Weights
        </span>
      );
    case "paid":
    default:
      return (
        <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-[0.7rem] font-bold text-amber-700 border border-amber-200">
          Paid API
        </span>
      );
  }
};

export const AvailabilityBadge: React.FC<{ availability: Availability }> = ({ availability }) => {
  if (availability === "both") {
    return (
      <div className="flex items-center gap-1">
        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[0.7rem] font-medium text-slate-700">
          <CloudIcon className="w-3 h-3 text-blue-500" /> Cloud API
        </span>
        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[0.7rem] font-medium text-slate-700">
          <CpuIcon className="w-3 h-3 text-emerald-600" /> Local Run
        </span>
      </div>
    );
  }

  if (availability === "local") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-700 border border-emerald-200">
        <CpuIcon className="w-3 h-3 text-emerald-600" /> Local Model
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[0.7rem] font-semibold text-blue-700 border border-blue-200">
      <CloudIcon className="w-3 h-3 text-blue-600" /> Cloud Only
    </span>
  );
};
