import { ITimeline } from '../../utils/types';
import '../../styles/aboutMe/TimelineItem.scss';

export default function TimelineItem(props: ITimeline) {
	return (
		<div className="timeline-item-container">
			<div className="timeline-item-left-side">
				<div className="circle">
					<props.icon size={35} />
				</div>
				<div className="vertical-line" />
			</div>

			<div className="timeline-item-right-side">
				<h3>{props.duration}</h3>
				<h1>{props.title}</h1>
				<p>{props.content}</p>
			</div>
		</div>
	);
}
