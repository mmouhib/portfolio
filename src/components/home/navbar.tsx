import styled from 'styled-components';
import colors from '../../utils/colors';

const StyledHeader = styled.header`
	width: 100%;
	height: 10%;
	display: flex;

	padding-top: 2vw;
	cursor: pointer;
	user-select: none;
	align-items: center;
	color: ${colors.darkTheme.mainTextColor};
	justify-content: space-around;
`;

const StyledLogo = styled.div`
	font-family: 'JetBrains Mono', monospace;
	font-size: 1.3em;
`;

const StyledNav = styled.nav`
	color: ${colors.darkTheme.navbarNotSelectedColor};
	display: flex;
	justify-content: space-around;
	width: 33%;

	font-family: Consolas, sans-serif;
	font-weight: 400;
	@media (max-width: 1000px) {
		display: none;
	}
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
