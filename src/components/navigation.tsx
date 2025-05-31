"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated, isProducer, isBuyer, isAdmin } = useAuth()

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  const handleLogout = async () => {
    try {
      await logout()
      window.location.href = "/"
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#22c55e]">AgriConnect</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[#22c55e] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">
                    {isProducer && "Espace Producteur"}
                    {isBuyer && "Espace Acheteur"}
                    {isAdmin && "Administration"}
                  </Link>
                </Button>
                <Button onClick={handleLogout} variant="outline">
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" asChild>
                  <Link href="/login">Connexion</Link>
                </Button>
                <Button className="bg-[#22c55e] hover:bg-[#1ea952]" asChild>
                  <Link href="/register">Inscription</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-[#22c55e] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-gray-600 hover:text-[#22c55e]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isProducer && "Espace Producteur"}
                    {isBuyer && "Espace Acheteur"}
                    {isAdmin && "Administration"}
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-gray-600 hover:text-[#22c55e]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 bg-[#22c55e] text-white rounded-lg mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inscription
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
