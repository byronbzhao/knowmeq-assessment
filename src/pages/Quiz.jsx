import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Question from '../components/Question'
import QuizHeader from '../components/QuizHeader'
import { Link } from 'react-router-dom';


const Quiz = () => {
	const [quizState, dispatch] = useContext(QuizContext);
	console.log(quizState);
	const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

	return (
		<div className="flex items-center justify-center h-screen">
			<QuizHeader />
			{quizState.showResults && (
				<div className="bg-white h-[50%] w-[50%] flex items-center justify-center flex-col text-center">
					<div className=" p-5 text-4xl">Congratulations!</div>
					<div>
						<div>You have completeted the quiz</div>
						<div className="mb-10">
							You got {quizState.correctAnswersCount} out of{' '}
							{quizState.questions.length} right!
						</div>
						<Link
							className="bg-lime-600 rounded-md p-5 cursor-pointer uppercase text-white hover:brightness-95"
							to="/"
							onClick={() => dispatch({ type: 'RESTART' })}
						>
							Go back to Home
						</Link>
					</div>
				</div>
			)}

			{!quizState.showResults && (
				<div className="bg-white shadow-lg rounded-md flex w-[50%] h-[60%] items-center justify-center">
					<div className="flex items-start justify-center w-[100%] h-[80%]">
						<div className=" p-5 mr-20 w-[50%] ">
							<div className=" mb-10 text-3xl">
								Question {quizState.currentQuestionIndex + 1} /{' '}
								{quizState.questions.length}
							</div>
							<div className="text-xl">
								{currentQuestion.question}
							</div>
						</div>

						<Question />
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
