import { useMemo, useState } from 'react'

export default function Quiz({ quiz, onSubmit }){
  const questions = quiz?.questions || []
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  const score = useMemo(() => {
    return questions.reduce((acc, q, i) => acc + ((answers[q.id] === q.answer) ? 1 : 0), 0)
  }, [answers, questions])

  const current = questions[index]
  const select = (optIdx) => setAnswers(a => ({...a, [current.id]: optIdx}))

  const next = () => {
    if (index < questions.length - 1) setIndex(i => i + 1)
    else {
      setFinished(true)
      onSubmit?.(score, answers)
    }
  }

  const restart = () => { setIndex(0); setAnswers({}); setFinished(false) }

  if (!questions.length) return <div className="card" style={{padding:16}}>No questions.</div>

  return (
    <div className="card quiz">
      {!finished ? (
        <>
          <div className="question">Q{index+1}. {current.q}</div>
          <div className="options">
            {current.options.map((opt, i) => {
              const selected = answers[current.id] === i
              const reveal = typeof answers[current.id] === 'number'
              const classNames = ['option']
              if (selected) classNames.push('selected')
              if (reveal && i === current.answer) classNames.push('correct')
              if (reveal && selected && i !== current.answer) classNames.push('incorrect')
              return (
                <button key={i} className={classNames.join(' ')} onClick={() => select(i)}>
                  {opt}
                </button>
              )
            })}
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{color:'var(--muted)'}}>Question {index+1} / {questions.length}</div>
            <button className="btn" onClick={next}>{index < questions.length-1 ? 'Next' : 'Finish'}</button>
          </div>
        </>
      ) : (
        <>
          <h3 style={{margin:0}}>Your Score: {score} / {questions.length}</h3>
          <p style={{color:'var(--muted)'}}>Great job! You can retake the quiz to improve your score.</p>
          <button className="btn" onClick={restart}>Retry Quiz</button>
        </>
      )}
    </div>
  )
}
