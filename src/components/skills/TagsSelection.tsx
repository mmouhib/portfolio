import { tagLabelType } from '../../utils/types';
import SkillsTag from './SkillsTag';
import { useState } from 'react';
import '../../styles/skills/TagsSelection.scss';

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
		<div className="tag-selection-container">
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
		</div>
	);
}
