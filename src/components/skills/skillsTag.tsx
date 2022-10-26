import styled from 'styled-components';
import { useState } from 'react';
import colors from '../../utils/colors';

import { SiRobotframework } from 'react-icons/Si';
import { TbLanguage } from 'react-icons/Tb';
import { AiOutlineAppstoreAdd } from 'react-icons/Ai';

interface TagProps {
	selected: boolean;
	tagLabel: string;
	type: 'languages' | 'frameworks' | 'software';
	selectionArray: boolean[];
	setSelectionArray: (arg: boolean[]) => void;
	key: number;
}

const StyledTag = styled.div`
	font-family: 'JetBrains Mono', monospace;
	width: fit-content;
	font-size: 0.7em;
	padding: 3px 7px;
	border-radius: 6px;
	cursor: pointer;
	user-select: none;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border: 2px solid ${colors.darkTheme.mainColor.normal};
`;

export default function SkillsTag(props: TagProps) {
	const [active, setActive] = useState(props.selected);

	return (
		<StyledTag
			onClick={() => {
				setActive(!active);
			}}
			style={{
				backgroundColor: active ? 'transparent' : '#bbace8',
			}}
		>
			{props.type == 'languages' ? (
				<TbLanguage
					color={active ? 'white' : colors.darkTheme.mainColor.darker}
					size={17}
				/>
			) : props.type == 'frameworks' ? (
				<SiRobotframework
					color={active ? 'white' : colors.darkTheme.mainColor.darker}
					size={17}
				/>
			) : (
				props.type == 'software' && (
					<AiOutlineAppstoreAdd
						color={active ? 'white' : colors.darkTheme.mainColor.darker}
						size={17}
					/>
				)
			)}

			<span
				style={{
					color: active ? 'white' : colors.darkTheme.mainColor.darker,
				}}
			>
				{props.tagLabel}
			</span>
		</StyledTag>
	);
}
