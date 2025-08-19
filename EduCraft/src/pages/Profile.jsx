import ProgressBar from '../components/ProgressBar'
import { storage } from '../utils/storage'
import { lessons } from '../data/lessons'

export default function Profile(){
  const user = storage.getUser() || { name: 'Guest' }
  const progress = storage.getProgress()
  const pct = Math.round((progress.completedLessons.length / lessons.length) * 100)

  return (
    <div className="container section">
      <div className="card" style={{padding:16}}>
        <h2 style={{marginTop:0}}>Hello, {user.name || 'Guest'} 👋</h2>
        <p style={{color:'var(--muted)'}}>Track your learning journey on EduCraft.</p>
        <ProgressBar value={pct} />
        <p style={{color:'var(--muted)'}}>{progress.completedLessons.length} / {lessons.length} lessons completed</p>

        <div style={{display:'grid', gap:12, marginTop:16}}>
          <div>
            <h3 style={{margin:'0 0 6px'}}>Completed Lessons</h3>
            <ul>
              {progress.completedLessons.length ? (
                progress.completedLessons.map(id => {
                  const l = lessons.find(x => x.id === id)
                  return <li key={id}>{l?.title || id}</li>
                })
              ) : <li>None yet.</li>}
            </ul>
          </div>
          <div>
            <h3 style={{margin:'0 0 6px'}}>Best Quiz Scores</h3>
            <ul>
              {Object.keys(progress.quizScores).length ? (
                Object.entries(progress.quizScores).map(([qid, score]) => (
                  <li key={qid}>{qid}: {score}</li>
                ))
              ) : <li>No quizzes taken yet.</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
