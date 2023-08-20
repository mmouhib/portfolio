import ageCalculator from '../../static/ageCalculator';
import LanguageProgress from './LanguageProgress';
import { useState } from 'react';
import styled from 'styled-components';

const StyledAboutMeContent = styled.div`
	//todo: increase width to make the timeline smaller
	width: 70%;
	height: 100vh;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;

	& .description {
		width: 75%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-family: 'source code pro', sans-serif;
		font-size: 1.5rem;
		color: rgb(255, 245, 255);

		& .hovered-sides {
			transition: all 0.3s;
			color: rgb(252, 171, 252);
			font-weight: 700;
		}

		& .hovered {
			transition: font-weight 1s;

			&:hover {
				color: rgb(175, 18, 175);
				font-weight: 900;
			}
		}
	}

	& .language-progress-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 3vw;
	}
`;

export default function AboutMeContent() {
	const description: string = `Hello, i'm a 
	${ageCalculator().toString()} year old software development
	student from Tunisia, currently in my final bachelor year. i'm
	passionate about software development especially mobile and
	web.`;

	const [hovered, setHovered] = useState<number>(-1);

	return (
		<StyledAboutMeContent>
			<div className="description">
				<p>
					{description.split('').map((element, index) => {
						return (
							<span
								key={index}
								onMouseEnter={() => {
									setHovered(index);
								}}
								onMouseLeave={() => {
									setHovered(-1);
								}}
								id={`description-letter-${index}`}
								className={`description-letter 
									${hovered == index && 'hovered'} 
									${(index - 1 == hovered || index + 1 == hovered) && 'hovered-sides'}`}
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
		</StyledAboutMeContent>
	);
}
