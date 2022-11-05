import styled from 'styled-components';
import { ITimeline } from '../../utils/types';

const StyledMilestone = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: white;
  width: 100%;
`;

const StyledLeftSide = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & .vertical-line {
    height: 13vh;
    width: 3px;
    background: white;
  }

  & .circle {
    background: #801db6;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: 4px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledRightSide = styled.div`
  width: 70%;

  & h1 {
    color: #ece4e4;
    font-size: 1.5rem;

    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }

  & h3 {
    color: #c88dee;
    font-family: Consolas, sans-serif;
    margin-bottom: 7px;
  }

  & p {
    font-size: 1rem;
    color: #989898;

    @media (max-width: 900px) {
      font-size: 0.7rem;
    }
  }
`;

export default function TimelineItem(props: ITimeline) {
	return (
		<StyledMilestone>
			<StyledLeftSide>
				<div className="circle">
					<props.icon size={35} />
				</div>
				<div className="vertical-line" />
			</StyledLeftSide>

			<StyledRightSide>
				<h3>{props.duration}</h3>
				<h1>{props.title}</h1>
				<p>{props.content}</p>
			</StyledRightSide>
		</StyledMilestone>
	);
}
