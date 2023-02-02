import '../../styles/home/navbar.scss';
import { AiOutlineFileDone } from 'react-icons/ai';

interface INavbarProps {
	setModalIsOpen: (arg: boolean) => void;
}

export default function Navbar(props: INavbarProps) {
	return (
		<div className="nav-container">
			<div className="logo"> {'>'}_mouhib</div>
			<nav className="nav">
				<span>
					<a href="#home">Home</a>
					{/* <div className="underlines"></div> */}
				</span>
				<span>
					<a href="#console">Console</a>
				</span>
				<span>
					<a href="#about-me">About Me</a>
				</span>
				<span>
					<a href="#contact">Contact</a>
				</span>
			</nav>
			<div
				className="btn"
				onClick={() => {
					props.setModalIsOpen(true);
				}}
			>
				<AiOutlineFileDone size={25} />
				Download Resume
			</div>
		</div>
	);
}
