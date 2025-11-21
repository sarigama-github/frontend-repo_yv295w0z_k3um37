import { Menu, BookOpen, Library, Users, Star } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center shadow-md">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-slate-900 tracking-tight">Readverse</p>
            <p className="text-xs text-slate-500 -mt-1">A cozy home for readers</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#library" className="hover:text-indigo-600 inline-flex items-center gap-2"><Library className="w-4 h-4"/>Library</a>
          <a href="#reader" className="hover:text-indigo-600 inline-flex items-center gap-2"><BookOpen className="w-4 h-4"/>Reader</a>
          <a href="#community" className="hover:text-indigo-600 inline-flex items-center gap-2"><Users className="w-4 h-4"/>Community</a>
          <a href="#discover" className="hover:text-indigo-600 inline-flex items-center gap-2"><Star className="w-4 h-4"/>Discover</a>
        </nav>

        <button className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
