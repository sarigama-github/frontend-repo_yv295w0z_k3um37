import { useEffect, useState } from 'react'
import { Plus, Tag, BookOpen, Loader2 } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Library() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ title: '', creator: '', kind: 'book', cover_url: '', genres: '' })

  const fetchBooks = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND}/books`)
      const data = await res.json()
      setBooks(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchBooks() }, [])

  const addBook = async (e) => {
    e.preventDefault()
    try {
      const payload = { ...form, genres: form.genres ? form.genres.split(',').map(s => s.trim()) : [] }
      const res = await fetch(`${BACKEND}/books`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (res.ok) {
        setForm({ title: '', creator: '', kind: 'book', cover_url: '', genres: '' })
        fetchBooks()
      }
    } catch (e) { console.error(e) }
  }

  return (
    <section id="library" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Your Library</h2>
            <p className="text-slate-600">Build shelves and manage your collection.</p>
          </div>
        </div>

        <form onSubmit={addBook} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8 p-4 border border-slate-200 rounded-xl bg-slate-50">
          <input value={form.title} onChange={e=>setForm(f=>({...f, title:e.target.value}))} placeholder="Title" className="px-3 py-2 rounded-lg border border-slate-200" required/>
          <input value={form.creator} onChange={e=>setForm(f=>({...f, creator:e.target.value}))} placeholder="Author/Artist" className="px-3 py-2 rounded-lg border border-slate-200" required/>
          <select value={form.kind} onChange={e=>setForm(f=>({...f, kind:e.target.value}))} className="px-3 py-2 rounded-lg border border-slate-200">
            <option value="book">Book</option>
            <option value="manga">Manga</option>
            <option value="light-novel">Light Novel</option>
            <option value="ebook">eBook</option>
          </select>
          <input value={form.cover_url} onChange={e=>setForm(f=>({...f, cover_url:e.target.value}))} placeholder="Cover URL (optional)" className="px-3 py-2 rounded-lg border border-slate-200" />
          <input value={form.genres} onChange={e=>setForm(f=>({...f, genres:e.target.value}))} placeholder="Genres (comma separated)" className="px-3 py-2 rounded-lg border border-slate-200" />
          <button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-slate-800 col-span-full sm:col-span-2">
            <Plus className="w-4 h-4"/> Add to library
          </button>
        </form>

        {loading ? (
          <div className="flex items-center justify-center py-16 text-slate-600"><Loader2 className="w-5 h-5 mr-2 animate-spin"/> Loading...</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map(b => (
              <div key={b.id} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
                <div className="aspect-[3/4] bg-slate-100 grid place-items-center text-slate-400">
                  {b.cover_url ? (
                    <img src={b.cover_url} alt={b.title} className="w-full h-full object-cover"/>
                  ) : (
                    <BookOpen className="w-10 h-10"/>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">{b.kind}</p>
                  <h3 className="font-semibold text-slate-900 mt-1">{b.title}</h3>
                  <p className="text-sm text-slate-600">{b.creator}</p>
                  {b.genres && b.genres.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {b.genres.slice(0,3).map(g => (
                        <span key={g} className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                          <Tag className="w-3 h-3"/> {g}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
