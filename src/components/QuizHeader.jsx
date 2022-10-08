import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../context/quiz';

const Header = () => {
	const [quizState, dispatch] = useContext(QuizContext);

	return (
		<div className="shadow-md fixed top-0 left-0 w-full flex items-center justify-between h-[100px] border-b border-gray-200 bg-white pl-10 pr-10">
			<Link to="/" className="text-gray-700 text-3xl">
				Test Your Skills
			</Link>
			
			<div className="bg-lime-600 rounded-md p-5 cursor-pointer uppercase text-white hover:brightness-95" onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>Next Question</div>
		</div>
	);
};

export default Header;