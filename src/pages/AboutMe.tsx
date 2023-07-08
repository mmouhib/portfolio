import AboutMeContent from '../components/aboutMe/AboutMeContent';
import '../styles/pages/AboutMe.scss';
import timelineMilestones from '../static/timeline';
import { ITimeline } from '../utils/types';
import TimelineItem from '../components/aboutMe/TimelineItem';

export default function AboutMe() {
	return (
		<div className="about-me" id="about-me">
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
		</div>
	);
}
