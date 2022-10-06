import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Question from './Question';
import {Link} from 'react-router-dom'

const Quiz = () => {
	const [quizState, dispatch] = useContext(QuizContext);
	console.log(quizState);

	return (
		<div className="quiz">
			{quizState.showResults && (
				<div className="results">
					<div className="congratulations">Congratulations!</div>
					<div className="results-info">
						<div className="">You have completeted the quiz</div>
            <div className="">You got {quizState.correctAnswersCount} out of {quizState.questions.length} right!</div>
            <Link to='/' onClick={() => dispatch({type: 'RESTART'})}>Go back to Home</Link>
					</div>
				</div>
			)}

			{!quizState.showResults && (
				<div className="">
					<div className="score">
						Question {quizState.currentQuestionIndex + 1} /{' '}
						{quizState.questions.length}
					</div>
					<Question />
					<div
						className="next-button"
						onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
					>
						Next Question
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
