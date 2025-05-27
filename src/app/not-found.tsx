import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-[#22c55e] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Page non trouvée</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button asChild>
        <Link href="/" className="bg-[#22c55e] hover:bg-[#1ea952]">
          Retour à l'accueil
        </Link>
      </Button>
    </div>
  )
}
