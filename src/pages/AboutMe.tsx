import Timeline from '../components/aboutMe/Timeline';
import AboutMeContent from '../components/aboutMe/AboutMeContent';
import '../styles/pages/AboutMe.scss';

export default function AboutMe() {
	return (
		<div className="about-me" id="about-me">
			<AboutMeContent />
			<Timeline />
		</div>
	);
}
