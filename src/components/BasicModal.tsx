import React, {FC} from 'react';

interface BasicModalProps {
	children: React.ReactNode
}

export const BasicModal: FC<BasicModalProps> = ({children}) => {

	return (
		<div>
			{children}
		</div>
	)
};

