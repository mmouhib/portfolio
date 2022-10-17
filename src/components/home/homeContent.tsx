import styled from 'styled-components';
import homeAvatar from '../../assets/homeAvatar.png';
import colors from '../../utils/colors';

const StyledHomeContent = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: row;
	color: white;
	align-items: center;
	gap: 10%;
	justify-content: center;
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

	//& span {
	//	background-image: linear-gradient(120deg, #4d67b0 0%, #8716b4 100%);
	//	background-repeat: no-repeat;
	//	background-size: 100% 0.05em;
	//	background-position: 0 88%;
	//	transition: background-size 0.25s ease-in;
	//
	//	&:hover {
	//		background-size: 100% 88%;
	//		color: #ab9898;
	//	}
	//}
`;

const StyledImageSection = styled.div`
	width: 30%;
`;

const StyledAvatarImage = styled.img`
	width: 100%;
`;

export default function HomeContent() {
	return (
		<StyledHomeContent>
			<StyledTextSection>
				<h1>
					Hi, i'm <p>Mouhib Ouni</p>
				</h1>
				<h2>Junior Software developer</h2>
				<p>
					Student and junior <span>mobile</span> and <span>web</span>{' '}
					developer looking to enhance his skills and dive deep in the
					software development field.
				</p>
			</StyledTextSection>
			<StyledImageSection>
				<StyledAvatarImage src={homeAvatar} alt="aa" />
			</StyledImageSection>
		</StyledHomeContent>
	);
}
