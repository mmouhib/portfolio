import styled from 'styled-components';
import colors from '../utils/colors';
import Timeline from '../components/aboutMe/Timeline';

const StyledSkills = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.darkTheme.backgroundColor};
	padding: 2vh 3vw;
	display: flex;
	align-items: center;
	flex-direction: row;

	& .left-side {
		border: 3px solid white;
		width: 70%;
		height: 100vh;
	}
`;

export default function Skills() {
	return (
		<StyledSkills>
			<div className="left-side" />
			<Timeline />
		</StyledSkills>
	);
}
