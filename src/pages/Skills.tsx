import styled from 'styled-components';
import colors from '../utils/colors';
import Timeline from '../components/aboutMe/Timeline';
import AboutMeContent from '../components/aboutMe/AboutMeContent';

const StyledSkills = styled.div`
	background-color: ${colors.darkTheme.backgroundColor};
	padding: 2vh 3vw;
	display: flex;
	align-items: center;
	flex-direction: row;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export default function Skills() {
	return (
		<StyledSkills>
			<AboutMeContent />
			<Timeline />
		</StyledSkills>
	);
}
