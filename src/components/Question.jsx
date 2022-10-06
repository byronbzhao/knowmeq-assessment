import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Answer from './Answer'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  return (
    <div>
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
            {quizState.answers.map((answer, index) => (
                <Answer answer={answer} key={index} />
            ))}
        </div>
    </div>
  )
}

export default Question