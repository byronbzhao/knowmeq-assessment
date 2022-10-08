import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
	return (
		<div className="">
			<Header />
			<div className="absolute top-[50%] left-[50%] tranform translate-x-[-50%] translate-y-[-50%]">
				<Link
					to="/quiz"
					className=" border bg-lime-600 rounded-md text-white p-[20px] shadow-md "
				>
					Examination One
				</Link>
			</div>
		</div>
	);
};

export default Home;
