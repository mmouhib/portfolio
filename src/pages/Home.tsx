import Navbar from '../components/home/navbar';
import HomeContent from '../components/home/homeContent';
import '../styles/pages/Home.scss';
import ResumeModal from '../components/home/resumeModal';
import { useState } from 'react';

export default function Home() {
	const [resumeModalState, setResumeModalState] = useState<boolean>(false);
	return (
		<div className="home-page" data-theme="dark" id="home">
			<Navbar setModalIsOpen={setResumeModalState} />
			<HomeContent />
			<ResumeModal
				modalIsOpen={resumeModalState}
				setModalIsOpen={setResumeModalState}
			/>
		</div>
	);
}
