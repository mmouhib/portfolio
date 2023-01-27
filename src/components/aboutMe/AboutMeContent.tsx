import ageCalculator from '../../static/ageCalculator';
import LanguageProgress from './LanguageProgress';
import '../../styles/aboutMe/AboutMeContent.scss';
import { useState } from 'react';

export default function AboutMeContent() {
	const description: string = `Hello, i'm a 
	${ageCalculator().toString()} year old software development
	student from Tunisia, currently in my final bachelor year. i'm
	passionate about software development especially mobile and
	web.`;

	const [hovered, setHovered] = useState<number>(-1);

	return (
		<div className="about-me-left-side-container">
			<div className="description">
				<p>
					{description.split('').map((element, index) => {
						return (
							<span
								onMouseEnter={() => {
									setHovered(index);
								}}
								onMouseLeave={() => {
									setHovered(-1);
								}}
								className={`description-letter ${
									hovered == index && 'hovered'
								}
								${(index - 1 == hovered || index + 1 == hovered) && 'hovered-sides'}
								`}
								id={`description-letter-${index}`}
							>
								{element}
							</span>
						);
					})}
				</p>
			</div>
			<div className="language-progress-container">
				<LanguageProgress level="100%" language="Arabic" />
				<LanguageProgress level="80%" language="English" />
				<LanguageProgress level="70%" language="French" />
				<LanguageProgress level="10%" language="German" />
			</div>
		</div>
	);
}
