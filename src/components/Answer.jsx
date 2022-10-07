import React from 'react';

const Answer = ({
	answer,
	index,
	onSelectAnswer,
	currentAnswer,
	correctAnswer,
}) => {
	const letterMapping = ['A', 'B', 'C', 'D'];
	const isCorrectAnswer = currentAnswer && answer === correctAnswer;
	const isWrongAnswer =
		currentAnswer === answer && currentAnswer !== correctAnswer;

	const correctAnswerClass = isCorrectAnswer ? 'bg-green-500' : '';
	const wrongAnwerClass = isWrongAnswer ? 'bg-red-500' : '';
	const disabledClass = currentAnswer ? 'pointer-events-none' : '';

	return (
		<div className={`border border-gray-400 rounded-md mb-5 cursor-pointer p-7 ${correctAnswerClass} ${wrongAnwerClass} ${disabledClass}`} onClick={() => onSelectAnswer(answer)}>
			<div className=" flex p-2">
				<div className="text-3xl border border-gray-500 rounded-full pr-2 pl-2 mr-2">{letterMapping[index]}</div>
				<div className="text-3xl">{answer}</div>
			</div>
		</div>
	);
};

export default Answer;
