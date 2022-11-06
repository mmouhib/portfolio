import homeAvatar from '../../assets/homeAvatar.png';
import '../../styles/home/homeImageContainer.scss';

export default function HomeImageContainer() {
	return (
		<div className="home-image-container">
			<img src={homeAvatar} alt="aa" />
		</div>
	);
}
