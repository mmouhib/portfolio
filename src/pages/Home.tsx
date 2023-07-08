import Navbar from '../components/home/navbar';
import '../styles/pages/Home.scss';
import ResumeModal from '../components/home/resumeModal';
import { useState } from 'react';
import Typewriter from '../components/home/typewriter';
import homeAvatar from '../assets/homeAvatar.png';

export default function Home() {
	const [resumeModalState, setResumeModalState] = useState<boolean>(false);
	return (
		<div className="home-page" data-theme="dark" id="home">
			<Navbar setModalIsOpen={setResumeModalState} />
			<div className="home-content">
				<div className="home-text-description">
					<h1>
						Hey there! i'm
						<Typewriter />
					</h1>
					<h2>Junior Software developer.</h2>
					<p className="about">
						Hello! i'm and junior <span>mobile</span> and <span>web</span> developer looking to enhance
						his skills and dive deeper into the software development field.
					</p>
				</div>
				<div className="home-image-container">
					<img src={homeAvatar} alt="home image" />
				</div>
			</div>
			<ResumeModal modalIsOpen={resumeModalState} setModalIsOpen={setResumeModalState} />
		</div>
	);
}
