export default function BlogPage() {
  const blogPosts = [
    {
      title: "L'agriculture numérique en Côte d'Ivoire : État des lieux et perspectives",
      excerpt: "Découvrez comment la technologie transforme le secteur agricole ivoirien et les opportunités qu'elle offre aux agriculteurs.",
      author: "Dr. Kouamé Konan",
      date: "27 Mai 2024",
      category: "Tendances",
      image: "https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg"
    },
    {
      title: "Guide pratique : Utiliser les drones pour surveiller vos cultures",
      excerpt: "Un guide complet sur l'utilisation des drones en agriculture : de la planification des vols à l'analyse des données.",
      author: "M. Touré Ibrahim",
      date: "25 Mai 2024",
      category: "Technologie",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
    },
    {
      title: "5 conseils pour optimiser votre production agricole",
      excerpt: "Des conseils pratiques basés sur les données pour améliorer vos rendements et réduire vos coûts de production.",
      author: "Mme. Bamba Sarah",
      date: "23 Mai 2024",
      category: "Conseils",
      image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
    },
    {
      title: "Les avantages du SMS agricole pour les petits producteurs",
      excerpt: "Comment les alertes SMS peuvent aider les agriculteurs à prendre de meilleures décisions pour leurs cultures.",
      author: "Dr. Kouamé Konan",
      date: "21 Mai 2024",
      category: "Innovation",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg"
    },
    {
      title: "Success Story : De la production traditionnelle à l'agriculture connectée",
      excerpt: "L'histoire inspirante d'un agriculteur qui a transformé son exploitation grâce aux outils numériques.",
      author: "Mme. Bamba Sarah",
      date: "19 Mai 2024",
      category: "Témoignages",
      image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
    },
    {
      title: "Comprendre les données météo pour mieux planifier vos cultures",
      excerpt: "Un guide pour interpréter les prévisions météorologiques et adapter vos pratiques agricoles en conséquence.",
      author: "M. Touré Ibrahim",
      date: "17 Mai 2024",
      category: "Guide",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Blog AgriConnect
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Découvrez nos derniers articles sur l'agriculture numérique, les innovations et les bonnes pratiques agricoles.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-[#22c55e]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-[#22c55e]">
                          {post.author.split(' ')[1][0]}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <button className="text-[#22c55e] hover:text-[#1ea952] font-medium">
                      Lire plus
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Restez informé
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils agricoles.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-[#22c55e] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1ea952] transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
