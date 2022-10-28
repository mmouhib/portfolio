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
				<span
					onClick={() => {
						setSelectionArray([true, true, true, true]);
					}}
				>
					select all
				</span>
				<span
					onClick={() => {
						setSelectionArray([false, false, false, false]);
					}}
				>
					reset all
				</span>
			</div>
		</StyledSkills>
	);
}
