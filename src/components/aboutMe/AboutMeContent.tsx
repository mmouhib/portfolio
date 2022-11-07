import ageCalculator from '../../static/ageCalculator';
import LanguageProgress from './LanguageProgress';
import '../../styles/aboutMe/AboutMeContent.scss';

export default function AboutMeContent() {
	return (
		<div className="about-me-left-side-container">
			<div className="about-me-left-side-animation-container">
				<div className="first-box"></div>
				<div className="content-box">
					<p>
						Hello, i'm a {ageCalculator()} year old software development
						student from Tunisia, currently in my final bachelor year. i'm
						passionate about software development especially mobile and
						web.
					</p>
				</div>
			</div>
			<div className="language-progress-container">
				<LanguageProgress level="100%" language="Arabic" />
				<LanguageProgress level="80%" language="English" />
				<LanguageProgress level="70%" language="French" />
				<LanguageProgress level="10%" language="German" />
			</div>
		</div>
	);
}
