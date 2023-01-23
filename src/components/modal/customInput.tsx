import '../../styles/modal/customInput.scss';
import React from 'react';
import { IconType } from 'react-icons';

interface ICustomInputProps {
	children: React.ReactNode;
	width: string;
	icon: IconType;
}

export default function CustomInput(props: ICustomInputProps) {
	return (
		<div className="custom-input-container" style={{ width: props.width }}>
			<div className="icon">
				<props.icon size={18} />
			</div>
			{props.children}
		</div>
	);
}
