import { Sparkles, Target, Trophy } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" /> New: Goals, quote vault, creator hub
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Your cozy, modern home for books, manga, and ebooks
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Build beautiful shelves, tag your moods, track progress with rich stats, and enjoy a reader that adapts to what you love—from vertical scroll manga to adjustable fonts for ebooks.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#library" className="inline-flex justify-center items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 shadow hover:bg-slate-800">
                Start your library
              </a>
              <a href="#discover" className="inline-flex justify-center items-center gap-2 rounded-lg bg-white border border-slate-200 text-slate-900 px-5 py-3 shadow-sm hover:bg-slate-50">
                Discover reads
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-slate-200 p-4">
                <Target className="w-5 h-5 mx-auto text-indigo-600" />
                <p className="mt-2 text-sm font-medium text-slate-700">Reading goals</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <Trophy className="w-5 h-5 mx-auto text-indigo-600" />
                <p className="mt-2 text-sm font-medium text-slate-700">Achievements</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <Sparkles className="w-5 h-5 mx-auto text-indigo-600" />
                <p className="mt-2 text-sm font-medium text-slate-700">Smart recs</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 grid place-items-center text-white">
                <div className="text-center p-6">
                  <p className="text-sm text-indigo-200/90">Built-in reader preview</p>
                  <h3 className="text-2xl font-bold mt-1">Vertical scroll manga • Comfortable ebook</h3>
                  <p className="text-indigo-200/90 mt-2 max-w-sm">
                    Tweak fonts, spacing and themes. Seamless cloud sync and offline reading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
