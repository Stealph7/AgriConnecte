"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const { user, isProducer, isBuyer, isAdmin } = useAuth()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    bio: "",
    // Role-specific fields
    companyName: "",
    taxId: "",
    deliveryAddress: "",
    preferredPayment: "",
    adminRole: "",
    department: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Implement API call to update profile
      console.log("Profile updated:", formData)
      alert("Profil mis à jour avec succès")
    } catch (error) {
      console.error("Error updating profile:", error)
      alert("Erreur lors de la mise à jour du profil")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Paramètres du compte</h1>
        <p className="text-gray-600 mt-1">
          Gérez vos informations personnelles et vos préférences
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Common Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Adresse
                </label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Role-specific fields */}
          {isProducer && (
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Informations Producteur</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nom de l'entreprise
                  </label>
                  <input
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Numéro d'identification fiscale
                  </label>
                  <input
                    name="taxId"
                    type="text"
                    value={formData.taxId}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {isBuyer && (
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Informations Acheteur</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Adresse de livraison
                  </label>
                  <textarea
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mode de paiement préféré
                  </label>
                  <select
                    name="preferredPayment"
                    value={formData.preferredPayment}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="mobile">Mobile Money</option>
                    <option value="bank">Virement bancaire</option>
                    <option value="cash">Espèces</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {isAdmin && (
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Informations Administrateur</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rôle administratif
                  </label>
                  <select
                    name="adminRole"
                    value={formData.adminRole}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                  >
                    <option value="">Sélectionnez un rôle</option>
                    <option value="super">Super Admin</option>
                    <option value="content">Modérateur Contenu</option>
                    <option value="support">Support Client</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Département
                  </label>
                  <input
                    name="department"
                    type="text"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#22c55e] focus:outline-none focus:ring-[#22c55e] sm:text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setFormData({
                name: user?.name || "",
                email: user?.email || "",
                phone: "",
                address: "",
                bio: "",
                companyName: "",
                taxId: "",
                deliveryAddress: "",
                preferredPayment: "",
                adminRole: "",
                department: "",
              })}
            >
              Réinitialiser
            </Button>
            <Button
              type="submit"
              className="bg-[#22c55e] hover:bg-[#1ea952]"
              disabled={loading}
            >
              {loading ? "Enregistrement..." : "Enregistrer les modifications"}
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Sécurité du compte
        </h2>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Changer le mot de passe
          </Button>
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
            Supprimer le compte
          </Button>
        </div>
      </div>
    </div>
  )
}
