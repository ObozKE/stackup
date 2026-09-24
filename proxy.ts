import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "";
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Check if request is accessing www subdomain
  const isWww = host.startsWith("www.");
  
  // Check if request is via insecure HTTP (ignore local development)
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");
  const isHttp = proto === "http" && !isLocalhost;

  if (isWww || isHttp) {
    const cleanHost = host.replace(/^www\./i, "");
    const targetHost = cleanHost || "stackupkenya.studio";
    const targetUrl = `https://${targetHost}${pathname}${search}`;
    
    // Issue a 301 Moved Permanently redirect
    return NextResponse.redirect(new URL(targetUrl), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, feed.xml, manifest.webmanifest
     * - static image formats (svg, png, jpg, jpeg, gif, webp, avif)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|feed.xml|manifest.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};
