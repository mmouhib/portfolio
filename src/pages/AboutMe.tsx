import styled from 'styled-components';
import colors from '../utils/colors';
import Greeting from '../assets/greetings.png';
import LanguageProgress from '../components/aboutMe/LanguageProgress';

const StyledAboutMe = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.darkTheme.backgroundColor};
`;

const StyledImageContainer = styled.img`
	width: 150px;
	height: 150px;
`;

export default function AboutMe() {
	return (
		<StyledAboutMe>
			<div>
				<LanguageProgress level={3} />
			</div>
			{/*<StyledImageContainer src={Greeting} alt="greeting" />*/}
		</StyledAboutMe>
	);
}
