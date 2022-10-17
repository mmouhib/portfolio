import styled from 'styled-components';
import colors from '../utils/colors';
import Navbar from '../components/home/navbar';
import HomeContent from '../components/home/homeContent';

const StyledHome = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.darkTheme.backgroundColor};
`;

export default function Home() {
	return (
		<StyledHome>
			<Navbar />
			<HomeContent />
		</StyledHome>
	);
}
