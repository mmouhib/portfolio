import '../../styles/modal/customInput.scss';
import React from 'react';
import { RiContactsLine } from 'react-icons/Ri';

export default function CustomInput(props: { children: React.ReactNode }) {
	return (
		<div className="custom-input-container">
			<div className="icon">
				<RiContactsLine size={18} />
			</div>
			{props.children}
		</div>
	);
}
