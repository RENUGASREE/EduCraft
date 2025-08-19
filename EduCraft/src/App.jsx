import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Lessons from './pages/Lessons'
import LessonView from './pages/LessonView'
import QuizPage from './pages/QuizPage'
import Profile from './pages/Profile'
import Login from './pages/Login'
import { storage } from './utils/storage'

export default function App() {
  const [theme, setTheme] = React.useState(storage.getTheme())

  React.useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    storage.setTheme(theme)
  }, [theme])

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonView />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
