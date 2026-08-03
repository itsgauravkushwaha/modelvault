/**
 * Validated environment variables.
 *
 * `publicEnv` holds `NEXT_PUBLIC_*` values — inlined into the client bundle,
 * safe in the browser. `getServerEnv()` holds server-only values (secrets) —
 * never read it from client code; on the client those values are `undefined`.
 *
 * A missing/invalid variable fails fast with a clear zod error rather than
 * surfacing as a confusing runtime bug later.
 */

import { z } from "zod";

/**
 * Treat an empty env var as unset.
 *
 * `cp .env.example .env` leaves declared-but-blank keys (`CONTACT_ENDPOINT=`),
 * which reach us as `""` — and `""` is not `undefined`, so an `.optional()`
 * schema would reject it as "Invalid URL". Without this, the documented setup
 * flow would break every optional variable the moment someone copied the
 * example file.
 */
const optionalUrl = () =>
  z.preprocess((v) => (v === "" ? undefined : v), z.url().optional());

const optionalString = () =>
  z.preprocess((v) => (v === "" ? undefined : v), z.string().optional());

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: optionalUrl(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: optionalString(),
  NEXT_PUBLIC_CLARITY_ID: optionalString(),
  NEXT_PUBLIC_GSC_VERIFICATION: optionalString(),
  NEXT_PUBLIC_BING_VERIFICATION: optionalString(),
});

const serverSchema = z.object({
  /** Optional upstream the contact endpoint forwards leads to (CRM / webhook). */
  CONTACT_ENDPOINT: optionalUrl(),
});

/** Public env — safe to read anywhere (server or client). */
export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID,
  NEXT_PUBLIC_GSC_VERIFICATION: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  NEXT_PUBLIC_BING_VERIFICATION: process.env.NEXT_PUBLIC_BING_VERIFICATION,
});

let cachedServerEnv: z.infer<typeof serverSchema> | undefined;

/**
 * Server-only env. Call from route handlers / server code only — parsed
 * lazily so the client bundle never evaluates it.
 */
export function getServerEnv() {
  cachedServerEnv ??= serverSchema.parse({
    CONTACT_ENDPOINT: process.env.CONTACT_ENDPOINT,
  });
  return cachedServerEnv;
}
