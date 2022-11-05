import styled from 'styled-components';
import { tagLabelType } from '../../utils/types';
import SkillsTag from './skillsTag';
import { useState } from 'react';

const StyledTagsSelection = styled.div`
  & .tags-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;

    background-color: #331267;
    padding: 100px;
    border-radius: 10px;
  }

  & span {
    color: white;
    cursor: pointer;
    user-select: none;
  }

  & h1 {
    color: white;
    margin-bottom: 30px;
  }
`;

export default function TagsSelection() {
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
		<StyledTagsSelection>
			<h1>Skills</h1>
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
		</StyledTagsSelection>
	);
}
