"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#22c55e]"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-8">
          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow-sm h-fit">
            <nav className="space-y-2">
              <a
                href="/dashboard"
                className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#22c55e]"
              >
                Tableau de bord
              </a>
              {user.role === "producer" ? (
                <>
                  <a
                    href="/dashboard/products"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#22c55e]"
                  >
                    Mes produits
                  </a>
                  <a
                    href="/dashboard/orders"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#22c55e]"
                  >
                    Commandes reçues
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/dashboard/marketplace"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#22c55e]"
                  >
                    Marketplace
                  </a>
                  <a
                    href="/dashboard/purchases"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#22c55e]"
                  >
                    Mes achats
                  </a>
                </>
              )}
              <a
                href="/dashboard/messages"
                className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#22c55e]"
              >
                Messages
              </a>
              <a
                href="/dashboard/settings"
                className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#22c55e]"
              >
                Paramètres
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="bg-white p-6 rounded-lg shadow-sm">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
