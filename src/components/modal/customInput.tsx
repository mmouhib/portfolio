import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

interface ICustomInputProps {
	children: React.ReactNode;
	width: string;
	icon: IconType;
}

const StyledCustomInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	background-color: #1e1e1e;
	box-shadow: black 0 10px 50px;
	border-radius: 7px;
	padding: 0 0 0 10px;
	gap: 10px;

	& .icon {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& input {
		outline: 0;
		border: none;
		width: 100%;
		height: 100%;
		font-size: 100%;
		background-color: #1e1e1e;
		color: white;
		padding: 0 10px;
		border-radius: 7px;
		font-family: 'inter', sans-serif;

		&:focus {
			outline: 2px solid #a3a3ff;
		}
	}
`;

export default function CustomInput(props: ICustomInputProps) {
	return (
		<StyledCustomInput style={{ width: props.width }}>
			<div className="icon">
				<props.icon size={18} />
			</div>
			{props.children}
		</StyledCustomInput>
	);
}
