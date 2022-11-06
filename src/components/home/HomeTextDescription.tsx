import Typewriter from './typewriter';
import '../../styles/home/HomeTextDescription.scss';

export default function HomeTextDescription() {
	return (
		<div className="home-text-description">
			<h1>
				Hey there! i'm
				<Typewriter />
			</h1>
			<h2>Junior Software developer</h2>
			<p>
				Student and junior <span>mobile</span> and <span>web</span>{' '}
				developer looking to enhance his skills and dive deeper into the
				software development field.
			</p>
		</div>
	);
}
