import Quiz from '../components/Quiz'
import { quizBank } from '../data/quiz'
import { saveQuizScore } from '../utils/storage'

export default function QuizPage(){
  const quizId = 'web-fundamentals'
  const quiz = quizBank[quizId]

  const handleSubmit = (score) => {
    saveQuizScore(quizId, score)
  }

  return (
    <div className="container section">
      <h2 style={{marginTop:0}}>{quiz.title}</h2>
      <Quiz quiz={quiz} onSubmit={handleSubmit} />
    </div>
  )
}
