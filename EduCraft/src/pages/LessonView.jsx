import { useParams } from 'react-router-dom'
import { lessons } from '../data/lessons'
import { completeLesson, storage } from '../utils/storage'

export default function LessonView(){
  const { id } = useParams()
  const lesson = lessons.find(l => l.id === id)
  if (!lesson) return <div className="container section">Lesson not found.</div>

  const markDone = () => {
    completeLesson(lesson.id)
    alert('Marked as completed! View your progress on the Profile page.')
  }

  const isDone = storage.getProgress().completedLessons.includes(lesson.id)

  return (
    <div className="container section">
      <article className="card" style={{padding:16}}>
        <img className="lesson-thumb" src={lesson.thumb} alt={lesson.title} />
        <h2 style={{marginBottom:8}}>{lesson.title}</h2>
        <div className="lesson-meta" style={{marginBottom:16}}>
          <span className="tag">{lesson.level}</span><span>•</span><span>{lesson.duration}</span>
        </div>
        <div style={{color:'var(--muted)'}}>
          {/* Render markdown-ish content minimally */}
          <pre style={{whiteSpace:'pre-wrap'}}>{lesson.content}</pre>
        </div>
        <div style={{display:'flex', gap:10, marginTop:12}}>
          <button className="btn" onClick={markDone} disabled={isDone}>{isDone? 'Completed' : 'Mark as Completed'}</button>
        </div>
      </article>
    </div>
  )
}
