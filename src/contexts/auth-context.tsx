"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "producer" | "buyer" | "admin"
}

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  isProducer: boolean
  isBuyer: boolean
  isAdmin: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Check for stored auth token and validate
    const checkAuth = async () => {
      try {
        // Simulate API call
        const mockUser = {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          role: "producer" as const,
        }
        setUser(mockUser)
      } catch (error) {
        console.error("Auth check failed:", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // TODO: Implement actual login
      const mockUser = {
        id: "1",
        name: "John Doe",
        email,
        role: "producer" as const,
      }
      setUser(mockUser)
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    }
  }

  const logout = async () => {
    try {
      // TODO: Implement actual logout
      setUser(null)
    } catch (error) {
      console.error("Logout failed:", error)
      throw error
    }
  }

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    isProducer: user?.role === "producer",
    isBuyer: user?.role === "buyer",
    isAdmin: user?.role === "admin",
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
