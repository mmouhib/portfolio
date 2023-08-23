import Home from './pages/Home';
import Console from './pages/Console';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const StyledGoToTop = styled.a`
	height: 60px;
	width: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 0;
	right: 0;
	color: white;
	border: 2px solid white;
	border-radius: 400px;
	padding: 3px;
	margin: 30px;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		background-color: var(--main);
		height: 65px;
		width: 65px;
		transform: rotate(6.3rad);
	}
`;

export default function App() {
	//todo: fix 'scroll to top circle' still showing on home section
	const isAtHomePage = (): boolean => {
		const location: string = document.location.href;
		if (location.includes('home')) return false;
		else if (!location.includes('#')) return false;
		else if (window.scrollY == 0) return false;
		return true;
	};
	return (
		<BrowserRouter>
			<StyledGoToTop href="#home">
				<BsFillArrowUpCircleFill size={50} />
			</StyledGoToTop>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home />
							<Console />
							<AboutMe />
							<Contact />
						</>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}
