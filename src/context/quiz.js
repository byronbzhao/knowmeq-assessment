import { createContext, useReducer } from 'react';
import { questions } from '../constants/questions';
import { shuffleAnswers } from '../helpers';

const initialState = {
	questions,
	currentQuestionIndex: 0,
	showResults: false,
    correctAnswersCount: 0,
    answers: shuffleAnswers(questions[0])
};

const reducer = (state, action) => {
	console.log(reducer, state, action);

	switch (action.type) {
		case 'NEXT_QUESTION': {
			const showResults =
				state.currentQuestionIndex === state.questions.length - 1;
			const currentQuestionIndex = showResults
				? state.currentQuestionIndex
				: state.currentQuestionIndex + 1;
			return {
				...state,
				currentQuestionIndex,
				showResults,
			};
		}
        case 'RESTART': {
            return initialState
        }

		default:
			return state;
	}
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
	const value = useReducer(reducer, initialState);

	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
