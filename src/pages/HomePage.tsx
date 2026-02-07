import { MapPin, Phone, Mail } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-slate-900">Resort & Property Experience</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Welcome to Your Dream Destination
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Discover luxury properties and resort experiences tailored just for you.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <MapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Prime Locations</h3>
            <p className="text-slate-600">
              Explore properties in the most sought-after destinations around the world.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <Phone className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">24/7 Support</h3>
            <p className="text-slate-600">
              Our dedicated team is always ready to assist you with your needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Stay Connected</h3>
            <p className="text-slate-600">
              Get the latest updates and exclusive offers delivered to your inbox.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Featured Properties</h2>
          <p className="text-slate-600">
            Browse our curated selection of premium properties and resort experiences.
            More features coming soon!
          </p>
        </section>
      </main>

      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-400">
            © 2026 Resort & Property Experience. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
