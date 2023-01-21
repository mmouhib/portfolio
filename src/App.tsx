import Home from './pages/Home';
import Console from './pages/Console';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Contact />
							<Home />
							<Console />
							<AboutMe />
						</>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}
