import { storage } from '../utils/storage'

export default function Login(){
  const user = storage.getUser()

  const onSubmit = (e) => {
    e.preventDefault()
    if (user) {
      localStorage.removeItem('educraft_user')
      window.location.href = '/'
      return
    }
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    storage.setUser({ name, email })
    window.location.href = '/'
  }

  return (
    <div className="container section">
      <form className="card" style={{padding:16, display:'grid', gap:12}} onSubmit={onSubmit}>
        <h2 style={{marginTop:0}}>{user? 'Logout' : 'Login'}</h2>
        {!user && (
          <>
            <label style={{display:'grid', gap:6}}>
              <span>Name</span>
              <input name="name" required className="input" placeholder="Your name"
                     style={{padding:12, borderRadius:10, border:'1px solid var(--border)', background:'var(--card)', color:'var(--text)'}} />
            </label>
            <label style={{display:'grid', gap:6}}>
              <span>Email</span>
              <input name="email" type="email" required className="input" placeholder="you@example.com"
                     style={{padding:12, borderRadius:10, border:'1px solid var(--border)', background:'var(--card)', color:'var(--text)'}} />
            </label>
          </>
        )}
        <button className="btn" type="submit">{user? 'Confirm Logout' : 'Login'}</button>
      </form>
    </div>
  )
}
