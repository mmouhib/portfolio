import styled from 'styled-components';
import homeAvatar from '../../assets/homeAvatar.png';
import colors from '../../utils/colors';
import Typewriter from './typewriter';

const StyledHomeContent = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: row;
	color: white;
	align-items: center;
	gap: 10%;
	justify-content: center;

	@media (max-width: 600px) {
		flex-direction: column-reverse;
	}
`;

const StyledTextSection = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	gap: 2vh;

	& p:first-child {
		font-size: 2em;
		color: ${colors.darkTheme.mainColor.normal};
		font-family: 'JetBrains Mono', monospace;
	}

	& h2 {
		color: #cecece;
	}

	& p {
		color: #b0b0b0;
		font-size: 1.1em;
	}

	@media (max-width: 600px) {
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 3vw;
		width: 70%;
	}
`;

const StyledAvatarImage = styled.img`
	width: 30%;

	@media (max-width: 500px) {
		width: 60%;
	}
`;

export default function HomeContent() {
	return (
		<StyledHomeContent>
			<StyledTextSection>
				<h1>
					Hi, i'm
					<Typewriter />
				</h1>
				<h2>Junior Software developer</h2>
				<p>
					Student and junior <span>mobile</span> and <span>web</span>{' '}
					developer looking to enhance his skills and dive deeper into the
					software development field.
				</p>
			</StyledTextSection>
			<StyledAvatarImage src={homeAvatar} alt="aa" />
		</StyledHomeContent>
	);
}
