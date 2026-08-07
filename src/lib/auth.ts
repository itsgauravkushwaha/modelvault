import { getServerEnv } from "@/env";

/**
 * Verifies admin authentication on API routes.
 * Checks HTTP headers (`x-admin-passcode`, `Authorization`) or cookies (`admin_token`).
 */
export function verifyAdminAuth(req: Request): boolean {
  try {
    const env = getServerEnv();
    const secretKey = env.ADMIN_SECRET_KEY || process.env.ADMIN_SECRET_KEY;

    // If no secret key configured on server, block admin access for safety
    if (!secretKey) {
      console.error("[Auth] ADMIN_SECRET_KEY is not configured on server.");
      return false;
    }

    // 1. Check custom header x-admin-passcode
    const headerPasscode = req.headers.get("x-admin-passcode");
    if (headerPasscode && headerPasscode === secretKey) {
      return true;
    }

    // 2. Check Authorization Bearer header
    const authHeader = req.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7);
      if (token === secretKey) {
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
      if (cookies["admin_token"] === secretKey) {
        return true;
      }
    }

    return false;
  } catch (err) {
    console.error("[Auth] Error verifying admin auth:", err);
    return false;
  }
}
