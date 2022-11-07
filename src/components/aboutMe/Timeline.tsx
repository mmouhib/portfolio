import timelineMilestones from '../../static/timeline';
import { ITimeline } from '../../utils/types';
import TimelineItem from './TimelineItem';
import '../../styles/aboutMe/Timeline.scss';

export default function Timeline() {
	return (
		<div className="timeline-container">
			{timelineMilestones.map((element: ITimeline) => {
				return (
					<TimelineItem
						content={element.content}
						duration={element.duration}
						title={element.title}
						icon={element.icon}
					/>
				);
			})}
		</div>
	);
}
