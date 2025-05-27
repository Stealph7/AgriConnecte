export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Bienvenue sur AGRIConnect
          </h1>
          <p className="text-xl mb-8">
            Votre portail vers une agriculture moderne et numérique en Côte d'Ivoire.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/services"
              className="bg-[#22c55e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1ea952] transition-colors"
            >
              Parcourir nos services
            </a>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Activités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Agricultural Advice */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Conseil Agricole
              </h3>
              <p className="text-gray-600 mb-6">
                Expertise et accompagnement personnalisé pour optimiser vos cultures.
              </p>
              <a href="/services" className="text-[#22c55e] hover:text-[#1ea952] font-medium">
                En savoir plus
              </a>
            </div>

            {/* Market Studies */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Développement d'études
              </h3>
              <p className="text-gray-600 mb-6">
                Analyses approfondies et études de marché agricole.
              </p>
              <a href="/services" className="text-[#22c55e] hover:text-[#1ea952] font-medium">
                En savoir plus
              </a>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Marketing Digital
              </h3>
              <p className="text-gray-600 mb-6">
                Stratégies digitales pour promouvoir vos produits agricoles.
              </p>
              <a href="/services" className="text-[#22c55e] hover:text-[#1ea952] font-medium">
                En savoir plus
              </a>
            </div>

            {/* Training */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Formation
              </h3>
              <p className="text-gray-600 mb-6">
                Programmes de formation pour les agriculteurs modernes.
              </p>
              <a href="/services" className="text-[#22c55e] hover:text-[#1ea952] font-medium">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                À Propos de Nous
              </h2>
              <p className="text-gray-600 mb-6">
                AgriConnect CI est une plateforme innovante qui révolutionne l'agriculture en Côte d'Ivoire. Notre mission est de connecter les agriculteurs aux technologies modernes pour améliorer leur productivité et leurs revenus.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-[#22c55e] hover:text-[#1ea952] font-medium"
              >
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
                alt="Agriculture moderne"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#22c55e] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à moderniser votre agriculture ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez AgriConnect CI aujourd'hui et bénéficiez de nos services innovants pour développer votre exploitation.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/register"
              className="bg-white text-[#22c55e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              S'inscrire maintenant
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
