import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") || "modelvault";
  const label = searchParams.get("label") || "ModelVault";
  const status = searchParams.get("status") || "11,000+ Models Indexed";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="210" h="28" viewBox="0 0 210 28" fill="none">
    <rect width="210" height="28" rx="6" fill="#0F172A"/>
    <rect x="1" y="1" width="208" height="26" rx="5" fill="#1E293B" stroke="#334155"/>
    <path d="M14 9L18 13L14 17M10 9L6 13L10 17" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="26" y="18" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" font-weight="700">${label}</text>
    <rect x="95" y="4" width="110" height="20" rx="4" fill="#0284C7"/>
    <text x="150" y="18" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="10" font-weight="800" text-anchor="middle">${status}</text>
  </svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
