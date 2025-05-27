import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define protected routes and roles allowed
const protectedRoutes = [
  { path: "/dashboard", roles: ["producer", "buyer", "admin"] },
  { path: "/dashboard/settings", roles: ["producer", "buyer", "admin"] },
  // Add more protected routes here
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const route = protectedRoutes.find(r => pathname.startsWith(r.path))
  if (!route) {
    // Public route, allow
    return NextResponse.next()
  }

  // Get user info from cookies or headers (simulate)
  const userRole = request.cookies.get("userRole")?.value || "public"

  if (!route.roles.includes(userRole)) {
    // Redirect to login if not authorized
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Specify paths to apply middleware
export const config = {
  matcher: ["/dashboard/:path*"],
}
