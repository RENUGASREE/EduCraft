import { Link } from 'react-router-dom'

export default function LessonCard({ lesson }){
  return (
    <article className="card lesson-card">
      <img className="lesson-thumb" src={lesson.thumb} alt={lesson.title} />
      <h3 style={{margin:'6px 0 4px'}}>{lesson.title}</h3>
      <div className="lesson-meta">
        <span className="tag">{lesson.level}</span>
        <span>•</span>
        <span>{lesson.duration}</span>
      </div>
      <p style={{color:'var(--muted)'}}>Kickstart this topic and mark it as completed from the lesson view.</p>
      <Link to={`/lessons/${lesson.id}`} className="btn" style={{textAlign:'center'}}>Open Lesson</Link>
    </article>
  )
}
