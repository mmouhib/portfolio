import HomeTextDescription from './HomeTextDescription';
import HomeImageContainer from './HomeImageContainer';
import '../../styles/home/homeContent.scss';

export default function HomeContent() {
	return (
		<div className="home-content">
			<HomeTextDescription />
			<HomeImageContainer />
		</div>
	);
}
