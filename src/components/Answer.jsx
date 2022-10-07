import React from 'react';

const Answer = ({ answer, index, onSelectAnswer, currentAnswer, correctAnswer }) => {
	const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = currentAnswer && answer === correctAnswer
    const isWrongAnswer = currentAnswer === answer && currentAnswer !== correctAnswer

    const correctAnswerClass = isCorrectAnswer ? 'bg-green-500' : ''
    const wrongAnwerClass = isWrongAnswer ? 'bg-red-500' : ''
    const disabledClass = currentAnswer ? 'pointer-events-none' : ''


	return (
		<div className={`answer ${correctAnswerClass} ${wrongAnwerClass} ${disabledClass}`} onClick={() => onSelectAnswer(answer)}>
			<div className="answer-letter">{letterMapping[index]}</div>
			<div className="answer-test">{answer}</div>
		</div>
	);
};

export default Answer;
