import React from 'react';

interface ErrorMessageProps {
	error:string
}

export const ErrorMessage = ({ error }:ErrorMessageProps) => {
	return (
		<div>
			<p className="text-3xl font-bold underline ">{error}</p>
		</div>
	);
};

