import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  // -- 1. SECURITY: Block Common Exploit Scanners --
  // Bot sering mencari file PHP, Config, atau Wordpress di server.
  // Kita tolak langsung (403 Forbidden) supaya hemat resource.
  const blockedPaths = [
    ".php",
    ".env",
    "wp-admin",
    "wp-content",
    "wp-includes",
    ".git",
    "admin.asp",
    "mysqldumper",
    "phpmyadmin",
  ];

  if (blockedPaths.some((path) => pathname.includes(path))) {
    console.log(`🚫 Blocked suspicious request: ${pathname}`);
    return new NextResponse(null, { status: 403, statusText: "Forbidden" });
  }

  // (Optional) Block Bot User Agents yang buruk jika perlu
  // const badBots = ['semrush', 'mj12bot', 'ahrefsbot']
  // if (badBots.some(bot => userAgent.toLowerCase().includes(bot))) {
  //   return new NextResponse(null, { status: 403 })
  // }

  // Lanjutkan request seperti biasa jika aman
  return NextResponse.next();
}

// Konfigurasi path mana saja yang dicek oleh Middleware ini
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) - biarkan API tetap jalan
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (file publik standar)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
