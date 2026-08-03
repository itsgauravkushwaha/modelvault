"use client";

import { useCookieStore } from "@/components/common/Cookie/cookieStore";
import { publicEnv } from "@/env";
import { GoogleAnalytics } from "./google-analytics";
import { MicrosoftClarity } from "./clarity";

export function AnalyticsProvider() {
  const consent = useCookieStore((s) => s.consent);
  const hydrated = useCookieStore((s) => s.hydrated);

  // Analytics scripts remain disabled until the user consents to analytics
  if (!hydrated || !consent || !consent.analytics) {
    return null;
  }

  const gaId = publicEnv.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = publicEnv.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {clarityId && <MicrosoftClarity clarityId={clarityId} />}
    </>
  );
}
