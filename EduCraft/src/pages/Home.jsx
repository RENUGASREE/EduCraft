import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import { storage } from '../utils/storage'
import { lessons } from '../data/lessons'

export default function Home(){
  const progress = storage.getProgress()
  const pct = Math.round((progress.completedLessons.length / lessons.length) * 100)
  return (
    <div className="container">
      <section className="hero">
        <div>
          <h1>Master Web Dev with <span style={{color:'var(--accent)'}}>EduCraft</span></h1>
          <p>Learn with guided lessons, practice with quizzes, and track your progress — all in one place.</p>
          <div className="cta">
            <Link to="/lessons" className="btn">Start Learning</Link>
            <Link to="/quiz" className="btn secondary">Take a Quiz</Link>
          </div>
        </div>
        <div className="card" style={{padding:16}}>
          <h3 style={{marginTop:0}}>Your Progress</h3>
          <ProgressBar value={pct} />
          <p style={{color:'var(--muted)'}}>{progress.completedLessons.length} / {lessons.length} lessons completed</p>
        </div>
      </section>

      <section className="section">
        <h2>Popular Lessons</h2>
        <p className="meta">Quick picks to get you going.</p>
        <div className="grid">
          {lessons.slice(0,3).map(l => (
            <Link key={l.id} to={`/lessons/${l.id}`} className="card lesson-card" style={{textDecoration:'none', color:'inherit'}}>
              <img className="lesson-thumb" src={l.thumb} alt={l.title} />
              <h3 style={{margin:'6px 0 4px'}}>{l.title}</h3>
              <div className="lesson-meta">
                <span className="tag">{l.level}</span>
                <span>•</span>
                <span>{l.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
