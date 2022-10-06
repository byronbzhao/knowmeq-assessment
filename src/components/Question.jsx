import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  return (
    <div>
        <div className="question">{currentQuestion.question}</div>
    </div>
  )
}

export default Question