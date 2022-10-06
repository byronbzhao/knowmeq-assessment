import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="bg-red-500 flex items-center justify-center h-[200px]">
			<Link to='/' className='text-gray-700 text-3xl'>Test Your Skills</Link>
		</div>
	);
};

export default Header;
