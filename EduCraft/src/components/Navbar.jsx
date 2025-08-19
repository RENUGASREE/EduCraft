import { NavLink, useNavigate } from 'react-router-dom'
import { storage } from '../utils/storage'

export default function Navbar({ theme, onToggleTheme }) {
  const user = storage.getUser()
  const navigate = useNavigate()
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand" onClick={() => navigate('/')}
            style={{cursor:'pointer'}}>
          <div className="brand-badge">EC</div>
          <div>EduCraft</div>
        </div>
        <nav className="nav" style={{display:'flex', gap:8}}>
          <NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
          <NavLink to="/lessons" className={({isActive})=> isActive? 'active' : ''}>Lessons</NavLink>
          <NavLink to="/quiz" className={({isActive})=> isActive? 'active' : ''}>Quiz</NavLink>
          <NavLink to="/profile" className={({isActive})=> isActive? 'active' : ''}>Profile</NavLink>
          <NavLink to="/login" className={({isActive})=> isActive? 'active' : ''}>{user? 'Logout' : 'Login'}</NavLink>
          <button className="toggle" onClick={onToggleTheme} title="Toggle theme">
            {theme === 'dark' ? '🌙' : '🌤️'}
          </button>
        </nav>
      </div>
    </header>
  )
}
