import AboutMeContent from '../components/aboutMe/AboutMeContent';
import timelineMilestones from '../static/timeline';
import { ITimeline } from '../utils/types';
import TimelineItem from '../components/aboutMe/TimelineItem';
import styled, { StyledComponent } from 'styled-components';

const AboutMeComp: StyledComponent<'div', any> = styled.div`
	background-color: var(--bg);
	padding: 2vh 3vw;
	display: flex;
	align-items: center;
	flex-direction: row;

	& .timeline-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		@media (max-width: 900px) {
			width: 100%;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export default function AboutMe(): JSX.Element {
	return (
		<AboutMeComp id="about-me">
			<AboutMeContent />
			<div className="timeline-container">
				{timelineMilestones.map((element: ITimeline, index: number) => {
					return (
						<TimelineItem
							key={index}
							content={element.content}
							duration={element.duration}
							title={element.title}
							icon={element.icon}
						/>
					);
				})}
			</div>
		</AboutMeComp>
	);
}
