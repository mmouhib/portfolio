import styled from 'styled-components';
import colors from '../utils/colors';
import SkillsTag from '../components/skills/skillsTag';
import { useState } from 'react';

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
		false,
		true,
		false,
	]);

	return (
		<StyledSkills>
			<div className="tags-container">
				<SkillsTag
					key={0}
					selectionArray={selectionArray}
					setSelectionArray={setSelectionArray}
					tagLabel="programming languages"
					type="languages"
					selected={selectionArray[0]}
				/>
				<SkillsTag
					key={1}
					selectionArray={selectionArray}
					setSelectionArray={setSelectionArray}
					tagLabel="frameworks"
					type="frameworks"
					selected={selectionArray[1]}
				/>
				<SkillsTag
					key={2}
					selectionArray={selectionArray}
					setSelectionArray={setSelectionArray}
					tagLabel="software"
					type="software"
					selected={selectionArray[2]}
				/>
				<span>select all </span>
				<span>reset all</span>
			</div>
		</StyledSkills>
	);
}
