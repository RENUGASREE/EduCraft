import LessonCard from '../components/LessonCard'
import { lessons } from '../data/lessons'

export default function Lessons(){
  return (
    <div className="container section">
      <h2 style={{marginTop:0}}>All Lessons</h2>
      <div className="grid">
        {lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)}
      </div>
    </div>
  )
}
