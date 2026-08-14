import crypto from "crypto";
import { getServerEnv } from "@/env";

/**
 * Generates a secure HMAC-SHA256 session token so raw ADMIN_SECRET_KEY is never exposed.
 */
export function generateAdminSessionToken(secretKey: string): string {
  const timeWindow = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7)); // 7-day window
  return crypto
    .createHmac("sha256", secretKey)
    .update(`modelvault-admin-session:${timeWindow}`)
    .digest("hex");
}

/**
 * Verifies admin authentication on API routes.
 * Checks HTTP headers (`x-admin-passcode`, `Authorization`) or cookies (`admin_token`).
 */
export function verifyAdminAuth(req: Request): boolean {
  try {
    const env = getServerEnv();
    const secretKey = env.ADMIN_SECRET_KEY || process.env.ADMIN_SECRET_KEY;

    if (!secretKey) {
      console.error("[Auth] ADMIN_SECRET_KEY is not configured on server.");
      return false;
    }

    const expectedSessionToken = generateAdminSessionToken(secretKey);

    // 1. Check custom header x-admin-passcode
    const headerPasscode = req.headers.get("x-admin-passcode");
    if (headerPasscode && (headerPasscode === secretKey || headerPasscode === expectedSessionToken)) {
      return true;
    }

    // 2. Check Authorization Bearer header
    const authHeader = req.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7);
      if (token === secretKey || token === expectedSessionToken) {
        return true;
      }
    }

    // 3. Check admin_token cookie
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const cookies = Object.fromEntries(
        cookieHeader.split(";").map((c) => {
          const [k, ...v] = c.trim().split("=");
          return [k, v.join("=")];
        })
      );
      const token = cookies["admin_token"];
      if (token && (token === secretKey || token === expectedSessionToken)) {
        return true;
      }
    }

    return false;
  } catch (err) {
    console.error("[Auth] Error verifying admin auth:", err);
    return false;
  }
}
