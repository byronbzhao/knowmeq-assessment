import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Answer from './Answer';

const Question = () => {
	const [quizState, dispatch] = useContext(QuizContext);

	const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

	return (
		<div>
			<div className="">
				{quizState.answers.map((answer, index) => (
					<Answer
						answer={answer}
						key={index}
						index={index}
						currentAnswer={quizState.currentAnswer}
						correctAnswer={currentQuestion.correctAnswer}
						onSelectAnswer={(answerText) =>
							dispatch({ type: 'SELECT_ANSWER', payload: answerText })
						}
					/>
				))}
			</div>
		</div>
	);
};

export default Question;
