'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Une erreur est survenue</h2>
      <p className="text-gray-600 mb-8 text-center">
        Nous nous excusons pour ce désagrément. Notre équipe a été notifiée et travaille sur la résolution du problème.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={reset}
          className="bg-[#22c55e] hover:bg-[#1ea952]"
        >
          Réessayer
        </Button>
        <Button
          onClick={() => window.location.href = '/'}
          variant="outline"
        >
          Retour à l'accueil
        </Button>
      </div>
    </div>
  )
}
