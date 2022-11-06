import styled from 'styled-components';
import colors from '../../utils/colors';
import '../../styles/home/navbar.scss';

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
		<div className="nav-container">
			<div className="logo"> {'>'}_mouhib</div>
			<nav className="nav">
				<span>Home</span>
				<span>About Me</span>
				<span>Portfolio</span>
				<span>Stats</span>
				<span>Contact</span>
			</nav>
			<div className="btn">Download CV</div>
		</div>
	);
}
