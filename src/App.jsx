import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Library from './components/Library'
import Discover from './components/Discover'
import Community from './components/Community'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Library />
      <Discover />
      <Community />

      <footer className="border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold">Readverse</p>
              <p className="text-sm text-slate-600 mt-1">A joyful space for story lovers everywhere.</p>
            </div>
            <div className="text-sm text-slate-600">
              <p>• Personalized shelves and tags</p>
              <p>• Progress tracking and goals</p>
              <p>• Built-in reader with cozy themes</p>
              <p>• Clubs, forums, and reviews</p>
            </div>
            <div className="text-sm text-slate-600">
              <p>• Indie creator hub</p>
              <p>• Achievements and quote vault</p>
              <p>• Smart recommendations</p>
              <p>• Cloud sync and offline-ready</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-8">Demo experience</p>
        </div>
      </footer>
    </div>
  )
}

export default App
