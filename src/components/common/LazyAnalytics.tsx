"use client";

/**
 * Lazy client wrapper for the AnalyticsProvider.
 *
 * `dynamic({ ssr: false })` keeps analytics scripts out of the SSR pass,
 * ensuring they never block the initial render or run in the bot bundle.
 * Scripts only mount after the user has granted cookie consent.
 */

import dynamic from "next/dynamic";

const AnalyticsProvider = dynamic(
  () => import("@/lib/analytics/provider").then((m) => ({ default: m.AnalyticsProvider })),
  { ssr: false, loading: () => null },
);

export function LazyAnalytics() {
  return <AnalyticsProvider />;
}
