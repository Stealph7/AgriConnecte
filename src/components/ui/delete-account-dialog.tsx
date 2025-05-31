"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteAccountDialogProps {
  onConfirm: (password: string) => Promise<void>
}

export function DeleteAccountDialog({ onConfirm }: DeleteAccountDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!password) {
      setError("Veuillez entrer votre mot de passe pour confirmer")
      return
    }

    setLoading(true)
    try {
      await onConfirm(password)
      setOpen(false)
      setPassword("")
    } catch (error) {
      setError("Une erreur est survenue lors de la suppression du compte")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
          Supprimer le compte
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-red-600">Supprimer le compte</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-500">
            Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible et 
            toutes vos données seront définitivement supprimées.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Entrez votre mot de passe pour confirmer
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={loading}
            >
              {loading ? "Suppression..." : "Supprimer définitivement"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
