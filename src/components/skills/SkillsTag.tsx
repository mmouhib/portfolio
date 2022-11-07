import colors from '../../utils/colors';
import '../../styles/skills/SkillsTag.scss';

import { SiRobotframework } from 'react-icons/si';
import { FaLanguage } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { DiDatabase } from 'react-icons/di';
import { tagLabelType } from '../../utils/types';

interface TagProps {
	type: tagLabelType;
	selectionArray: boolean[];
	setSelectionArray: (arg: boolean[]) => void;
	id: number;
}

export default function SkillsTag(props: TagProps) {
	/**
	 * we use typeToIconMapper to get the icon component that corresponds to each type.
	 * after, we determine that icon and store it in the 'CorrectIcon' variable and render it
	 * using that name (CorrectIcon).
	 * all that to follow DRY conventions and to avoid nested ternaries and conditional rendering.
	 * => see previous commit to see the worse version of the component.
	 */
	const typeToIconMapper: any = {
		'programming languages': FaLanguage,
		frameworks: SiRobotframework,
		software: AiOutlineAppstoreAdd,
		databases: DiDatabase,
	};

	const CorrectIcon: any = typeToIconMapper[props.type];

	const iconColor: string = props.selectionArray[props.id]
		? colors.darkTheme.mainColor.darker
		: 'white';

	const changingStyle: object = {
		backgroundColor: props.selectionArray[props.id]
			? '#bbace8'
			: 'transparent',

		color: props.selectionArray[props.id]
			? colors.darkTheme.mainColor.darker
			: 'white',
	};

	const _onClick = () => {
		props.setSelectionArray(
			props.selectionArray.map((element: boolean, index: number) => {
				if (index == props.id) return !element;
				return element;
			})
		);
	};

	return (
		<div className="skills-tag" onClick={_onClick} style={changingStyle}>
			<CorrectIcon color={iconColor} size={17} />
			<span style={changingStyle}>{props.type}</span>
		</div>
	);
}
