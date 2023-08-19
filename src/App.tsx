import Home from './pages/Home';
import Console from './pages/Console';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AiOutlineToTop } from 'react-icons/ai';
import styled from 'styled-components';

const StyledGoToTop = styled.a`
	position: fixed;
	bottom: 0;
	right: 0;
	color: white;
	border: 2px solid white;
	border-radius: 400px;
	padding: 3px;
	margin: 30px;
	cursor: pointer;
	transition: all 0.5s;

	&:hover {
		background-color: var(--main);
	}
`;

export default function App() {
	return (
		<BrowserRouter>
			<StyledGoToTop href="#home">
				<AiOutlineToTop size={40} />
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
