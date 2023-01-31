import '../../styles/home/navbar.scss';
import { IModalProps } from '../../utils/types';

export default function Navbar(props: {
	setModalIsOpen: (arg: boolean) => void;
}) {
	return (
		<div className="nav-container">
			<div className="logo"> {'>'}_mouhib</div>
			<nav className="nav">
				<span>
					<a href="#home">Home</a>
				</span>
				<span>
					<a href="#about-me">About Me</a>
				</span>
				<span>
					<a href="#contact">Contact</a>
				</span>
				<span>
					<a href="#console">Console</a>
				</span>
			</nav>
			<div
				className="btn"
				onClick={() => {
					props.setModalIsOpen(true);
				}}
			>
				Download CV
			</div>
		</div>
	);
}
