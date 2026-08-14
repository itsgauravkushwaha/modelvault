import { NextResponse } from "next/server";
import { getServerEnv } from "@/env";
import { checkRateLimit } from "@/lib/rate-limit";
import { generateAdminSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    // Rate limit auth attempts (max 5 per minute per IP)
    const rateLimit = checkRateLimit(request, "admin:auth", 5, 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many authentication attempts. Please wait a minute." },
        { status: 429 }
      );
    }

    const env = getServerEnv();
    const secretKey = env.ADMIN_SECRET_KEY || process.env.ADMIN_SECRET_KEY;
    if (!secretKey) {
      console.error("ADMIN_SECRET_KEY environment variable is missing on server");
      return NextResponse.json(
        { error: "Admin authentication is not configured on server." },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { passcode } = body;

    if (passcode === secretKey) {
      const sessionToken = generateAdminSessionToken(secretKey);

      const response = NextResponse.json({
        success: true,
        message: "Authentication successful",
        token: sessionToken,
      });

      // Set HTTP-only cookie for browser-based session persistence
      response.cookies.set("admin_token", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid admin passcode" },
      { status: 401 }
    );
  } catch (error) {
    console.error("POST /api/admin/auth error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
