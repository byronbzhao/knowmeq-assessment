import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

	return (
		<div className="shadow-md fixed top-0 left-0 w-full flex items-center justify-center h-[100px] border-b border-gray-200 bg-white pl-10 pr-10">
			<Link to="/" className="text-gray-700 text-3xl">
				Test Your Skills
			</Link>
		</div>
	);
};

export default Header;
