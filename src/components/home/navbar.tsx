import styled from 'styled-components';
import colors from '../../utils/colors';

const StyledHeader: any = styled.header`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-around;
	padding-top: 2vw;
	cursor: pointer;
	user-select: none;
	align-items: center;
	color: ${colors.darkTheme.mainTextColor};
`;

const StyledLogo = styled.div`
	font-family: 'JetBrains Mono', monospace;
	font-size: 1.3em;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
	width: 27%;
	font-family: Inter, serif;
	font-weight: 400;
`;

const StyledButton = styled.div`
	color: white;
	background-color: ${colors.darkTheme.mainColor.normal};
	padding: 1.5vh;
	border-radius: 4px;
	font-weight: bold;

	&:hover {
		background-color: ${colors.darkTheme.mainColor.lighter};
	}
`;

export default function Navbar() {
	return (
		<StyledHeader>
			<StyledLogo> {'>'}_mouhib</StyledLogo>
			<StyledNav>
				<span>Home</span>
				<span>About Me</span>
				<span>Portfolio</span>
				<span>Stats</span>
				<span>Contact</span>
			</StyledNav>
			<StyledButton>Download CV</StyledButton>
		</StyledHeader>
	);
}
