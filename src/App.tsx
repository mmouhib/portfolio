import Home from './pages/Home';
import Console from './pages/Console';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AiOutlineToTop } from 'react-icons/ai';
import './styles/app.scss';

export default function App() {
	return (
		<BrowserRouter>
			<a href="#home" className="goto-top">
				<AiOutlineToTop size={40} />
			</a>
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
