import { useEffect, useState } from 'react'
import { Users, MessageSquare, Send } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Community(){
  const [clubs, setClubs] = useState([])
  const [posts, setPosts] = useState([])
  const [clubName, setClubName] = useState('')
  const [post, setPost] = useState('')

  const refresh = async () => {
    try {
      const [c, p] = await Promise.all([
        fetch(`${BACKEND}/clubs`).then(r=>r.json()),
        fetch(`${BACKEND}/posts`).then(r=>r.json())
      ])
      setClubs(c)
      setPosts(p)
    } catch (e) { console.error(e) }
  }

  useEffect(()=>{ refresh() },[])

  const createClub = async (e) => {
    e.preventDefault()
    if(!clubName) return
    await fetch(`${BACKEND}/clubs`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name: clubName, description: '', owner_id: 'demo' }) })
    setClubName('')
    refresh()
  }

  const createPost = async (e) => {
    e.preventDefault()
    if(!post || clubs.length===0) return
    await fetch(`${BACKEND}/posts`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ club_id: clubs[0].id, user_id: 'demo', content: post }) })
    setPost('')
    refresh()
  }

  return (
    <section id="community" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Community</h2>
            <p className="text-slate-600">Clubs and conversations for every genre.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 rounded-xl border border-slate-200 p-4">
            <form onSubmit={createClub} className="space-y-2">
              <label className="text-sm text-slate-700">Create a club</label>
              <input value={clubName} onChange={e=>setClubName(e.target.value)} placeholder="e.g., Cozy Fantasy Readers" className="w-full px-3 py-2 rounded-lg border border-slate-200"/>
              <button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-slate-800 w-full">
                <Users className="w-4 h-4"/> Create
              </button>
            </form>
          </div>

          <div className="md:col-span-2 rounded-xl border border-slate-200 p-4">
            <form onSubmit={createPost} className="flex gap-2 mb-4">
              <input value={post} onChange={e=>setPost(e.target.value)} placeholder="Share a thought..." className="flex-1 px-3 py-2 rounded-lg border border-slate-200"/>
              <button className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-500">
                <Send className="w-4 h-4"/> Post
              </button>
            </form>

            <div className="space-y-3">
              {posts.map(p => (
                <div key={p.id} className="rounded-lg border border-slate-200 p-3">
                  <div className="text-sm text-slate-600">{p.user_id} in club {p.club_id}</div>
                  <div className="text-slate-900">{p.content}</div>
                </div>
              ))}
              {posts.length===0 && (
                <div className="text-slate-500 text-sm">No posts yet. Create a club and start a conversation!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
