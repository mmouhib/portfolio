import styled from 'styled-components';
import { useState } from 'react';
import colors from '../../utils/colors';

import { SiRobotframework } from 'react-icons/Si';
import { TbLanguage } from 'react-icons/Tb';
import { AiOutlineAppstoreAdd } from 'react-icons/Ai';
import { tagLabelType } from '../../utils/types';

interface TagProps {
	selected: boolean;
	type: tagLabelType;
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
	/**
	 * we use typeToIconMapper to get the icon component that corresponds to each type.
	 * after, we determine that icon and store it in the 'CorrectIcon' variable and render it
	 * using that name (CorrectIcon).
	 * all that to follow DRY conventions and to avoid nested ternaries and conditional rendering.
	 * => see previous commit to see the worse version of the component.
	 */
	const typeToIconMapper: any = {
		'programming languages': TbLanguage,
		frameworks: SiRobotframework,
		software: AiOutlineAppstoreAdd,
	};

	const CorrectIcon: any = typeToIconMapper[props.type];

	const [active, setActive] = useState(props.selected);

	const iconColor: string = active
		? 'white'
		: colors.darkTheme.mainColor.darker;

	const changingStyle: object = {
		backgroundColor: active ? 'transparent' : '#bbace8',
		color: active ? 'white' : colors.darkTheme.mainColor.darker,
	};

	const _onClick = () => {
		setActive(!active);
	};

	return (
		<StyledTag onClick={_onClick} style={changingStyle}>
			<CorrectIcon color={iconColor} size={17} />
			<span style={changingStyle}>{props.type}</span>
		</StyledTag>
	);
}
