import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Question from './Question'

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log(quizState)

  return (
    <div className='quiz'>
      <div className="score">
        Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
      </div>
      <Question />
      <div className="next-button" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>
        Next Question
      </div>
    </div>
  )
}

export default Quiz