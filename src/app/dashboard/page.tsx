"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { user } = useAuth()
  const isProducer = user?.role === "producer"

  const stats = isProducer ? [
    { label: "Produits", value: "12" },
    { label: "Commandes", value: "25" },
    { label: "Vues", value: "1.2k" },
    { label: "Revenue", value: "850k FCFA" },
  ] : [
    { label: "Achats", value: "8" },
    { label: "Messages", value: "15" },
    { label: "Vendeurs suivis", value: "6" },
    { label: "Total dépensé", value: "450k FCFA" },
  ]

  const recentActivities = [
    {
      date: "Aujourd'hui",
      activities: [
        {
          time: "14:30",
          description: isProducer 
            ? "Nouvelle commande reçue pour Maïs (50kg)"
            : "Commande effectuée - Maïs (50kg)",
        },
        {
          time: "10:15",
          description: isProducer
            ? "Message reçu de Jean Kouassi"
            : "Message envoyé à Producteur Bio",
        },
      ],
    },
    {
      date: "Hier",
      activities: [
        {
          time: "16:45",
          description: isProducer
            ? "Produit ajouté - Manioc (100kg)"
            : "Consultation de 5 nouveaux produits",
        },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Bienvenue, {user?.name}
        </h1>
        <p className="text-gray-600 mt-1">
          {isProducer 
            ? "Gérez vos produits et suivez vos ventes"
            : "Trouvez les meilleurs produits agricoles"}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">{stat.label}</h3>
            <p className="text-2xl font-bold text-[#22c55e] mt-2">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isProducer ? (
            <>
              <Button className="bg-[#22c55e] hover:bg-[#1ea952]">
                Ajouter un produit
              </Button>
              <Button variant="outline">
                Voir les commandes
              </Button>
              <Button variant="outline">
                Gérer le stock
              </Button>
            </>
          ) : (
            <>
              <Button className="bg-[#22c55e] hover:bg-[#1ea952]">
                Explorer le marché
              </Button>
              <Button variant="outline">
                Messages
              </Button>
              <Button variant="outline">
                Suivi des commandes
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Activité récente</h2>
        <Card className="divide-y divide-gray-200">
          {recentActivities.map((day, dayIndex) => (
            <div key={dayIndex} className="p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">{day.date}</h3>
              <div className="space-y-3">
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex gap-3">
                    <div className="text-sm text-gray-500">{activity.time}</div>
                    <div className="text-sm text-gray-700">{activity.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}
