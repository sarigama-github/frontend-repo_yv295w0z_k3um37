import { useEffect, useState } from 'react'
import { Sparkles, Compass, ChevronRight } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Discover(){
  const [recs, setRecs] = useState([])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${BACKEND}/recommendations`)
        const data = await res.json()
        setRecs(data)
      } catch (e) { console.error(e) }
    }
    run()
  }, [])

  return (
    <section id="discover" className="py-14 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Smart picks
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 tracking-tight">Discover</h2>
            <p className="text-slate-600">Freshly added and trending around your tastes.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-indigo-700 hover:text-indigo-800">More <ChevronRight className="w-4 h-4"/></a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {recs.map((r)=> (
            <div key={r.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <div className="aspect-[3/4] bg-slate-100" />
              <div className="p-3">
                <p className="text-[11px] uppercase tracking-wide text-indigo-600 font-semibold">{r.kind}</p>
                <p className="font-medium text-slate-900">{r.title}</p>
                <p className="text-sm text-slate-600">{r.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
