import React from 'react';

interface ErrorMessageProps {
	error:string
}

export const ErrorMessage = ({ error }:ErrorMessageProps) => {

	return (
		<div>
			<p className="text-center">{error}</p>
		</div>
	);
};

