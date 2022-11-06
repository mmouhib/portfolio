import Navbar from '../components/home/navbar';
import HomeContent from '../components/home/homeContent';
import '../styles/pages/Home.scss';

export default function Home() {
	return (
		<div className="home-page" data-theme="dark">
			<Navbar />
			<HomeContent />
		</div>
	);
}
