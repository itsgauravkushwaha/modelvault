"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDirectoryStore } from "@/stores/use-directory-store";
import { UseCase } from "@/types/model";

interface Chip {
  label: string;
  useCase?: UseCase;
  availability?: "cloud" | "local";
  pricing?: "open-weights";
}

const CHIPS: Chip[] = [
  { label: "All Models" },
  { label: "Text & Chat", useCase: "text-chat" },
  { label: "Reasoning", useCase: "reasoning" },
  { label: "Coding Agents", useCase: "coding" },
  { label: "Image Gen", useCase: "image-gen" },
  { label: "Video Gen", useCase: "video-gen" },
  { label: "Audio & Speech", useCase: "audio-speech" },
  { label: "Vision-Language", useCase: "vision-language" },
  { label: "Embeddings / RAG", useCase: "embeddings-rag" },
  { label: "Local Models", availability: "local" },
  { label: "Cloud APIs", availability: "cloud" },
  { label: "Open Weights", pricing: "open-weights" },
];

export const FilterChips = () => {
  const pathname = usePathname();
  const router = useRouter();

  const useCaseFilter = useDirectoryStore((s) => s.useCaseFilter);
  const availabilityFilter = useDirectoryStore((s) => s.availabilityFilter);
  const pricingFilter = useDirectoryStore((s) => s.pricingFilter);

  const setUseCaseFilter = useDirectoryStore((s) => s.setUseCaseFilter);
  const setAvailabilityFilter = useDirectoryStore((s) => s.setAvailabilityFilter);
  const setPricingFilter = useDirectoryStore((s) => s.setPricingFilter);
  const resetFilters = useDirectoryStore((s) => s.resetFilters);

  const handleChipClick = (chip: Chip) => {
    if (!chip.useCase && !chip.availability && !chip.pricing) {
      resetFilters();
    } else {
      if (chip.useCase) {
        setUseCaseFilter(useCaseFilter === chip.useCase ? "all" : chip.useCase);
      }
      if (chip.availability) {
        setAvailabilityFilter(availabilityFilter === chip.availability ? "all" : chip.availability);
      }
      if (chip.pricing) {
        setPricingFilter(pricingFilter === chip.pricing ? "all" : chip.pricing);
      }
    }

    if (pathname !== "/models") {
      router.push("/models");
    }
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar scroll-smooth">
      {CHIPS.map((chip) => {
        let isActive = false;
        if (!chip.useCase && !chip.availability && !chip.pricing) {
          isActive = useCaseFilter === "all" && availabilityFilter === "all" && pricingFilter === "all";
        } else if (chip.useCase) {
          isActive = useCaseFilter === chip.useCase;
        } else if (chip.availability) {
          isActive = availabilityFilter === chip.availability;
        } else if (chip.pricing) {
          isActive = pricingFilter === chip.pricing;
        }

        return (
          <button
            key={chip.label}
            onClick={() => handleChipClick(chip)}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
};
