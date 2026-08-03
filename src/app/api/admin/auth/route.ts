import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const secretKey = process.env.ADMIN_SECRET_KEY || "admin123";

    if (passcode === secretKey) {
      return NextResponse.json({ success: true, message: "Authentication successful" });
    }

    return NextResponse.json({ success: false, error: "Invalid admin passcode" }, { status: 401 });
  } catch (error) {
    console.error("POST /api/admin/auth error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
