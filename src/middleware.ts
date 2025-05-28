import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verify } from "jsonwebtoken"

// Paths that require authentication
const protectedPaths = [
  "/dashboard",
  "/api/user/profile",
  "/api/products",
  "/api/orders",
  "/api/messages",
]

// Paths that are accessible only to non-authenticated users
const authPaths = ["/login", "/register"]

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")
  const { pathname } = request.nextUrl

  // Check if path requires authentication
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path))
  const isAuthPath = authPaths.some(path => pathname === path)

  try {
    if (token) {
      // Verify token
      verify(token.value, process.env.NEXTAUTH_SECRET || "your-secret-key")

      // Redirect authenticated users away from auth pages
      if (isAuthPath) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    } else if (isProtectedPath) {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    // Token is invalid
    if (isProtectedPath) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}
