import React from 'react';
import {Link} from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className="h-10 flex justify-between px-5 bg-red-700 items-center text-white">
			<span className="font-bold ">SHOP</span>
			<span>
				<Link to="/" className="mr-2">Products</Link>
				<Link to="/about">About</Link>
      </span>
		</nav>
	);
};

