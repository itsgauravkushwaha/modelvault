"use client";

import { useCookieStore } from "@/components/common/Cookie/cookieStore";
import { trackEvent } from "@/lib/analytics/events";

type FinderEvent = "finder_started" | "finder_results" | "finder_no_match" | "finder_setup_opened" | "finder_command_copied";

/** Coarse funnel events only. Never send raw prompts, budget or hardware values. */
export function trackFinderEvent(name: FinderEvent, details: { task?: string; deployment?: string; model_id?: string; result_count?: number } = {}) {
  const { consent, hydrated } = useCookieStore.getState();
  if (hydrated && consent?.analytics) trackEvent(name, details);
}
