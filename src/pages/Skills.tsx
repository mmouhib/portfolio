import styled from 'styled-components';
import colors from '../utils/colors';
import SkillsTag from '../components/skills/skillsTag';
import { useState } from 'react';
import { tagLabelType } from '../utils/types';

const StyledSkills = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.darkTheme.backgroundColor};
	padding: 2vh 3vw;
	display: flex;
	align-items: start;
	justify-content: center;

	& .tags-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2vw;
	}

	& span {
		color: white;
		cursor: pointer;
		user-select: none;
	}
`;

export default function Skills() {
	const [selectionArray, setSelectionArray] = useState<boolean[]>([
		true,
		true,
		true,
		true,
	]);

	const tagTypes: tagLabelType[] = [
		'programming languages',
		'frameworks',
		'software',
		'databases',
	];

	const resetArray = (): void => {
		setSelectionArray([false, false, false, false]);
	};

	const selectAll = (): void => {
		setSelectionArray([true, true, true, true]);
	};

	return (
		<StyledSkills>
			<div className="tags-container">
				{tagTypes.map((element: tagLabelType, index: number) => {
					return (
						<SkillsTag
							key={index}
							id={index}
							selectionArray={selectionArray}
							setSelectionArray={setSelectionArray}
							type={element}
						/>
					);
				})}
				<span onClick={selectAll}>select all</span>
				<span onClick={resetArray}>reset all</span>
			</div>
		</StyledSkills>
	);
}
