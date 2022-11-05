import styled from 'styled-components';
import timelineMilestones from '../../static/timeline';
import { ITimeline } from '../../utils/types';
import TimelineItem from './TimelineItem';

const StyledTimeline = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export default function Timeline() {
	return (
		<StyledTimeline>
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
		</StyledTimeline>
	);
}
