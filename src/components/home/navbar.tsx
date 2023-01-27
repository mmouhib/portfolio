import '../../styles/home/navbar.scss';

export default function Navbar() {
	return (
		<div className="nav-container">
			<div className="logo"> {'>'}_mouhib</div>
			<nav className="nav">
				<span>
					<a href="#console">Home</a>
				</span>
				<span>About Me</span>
				<span>Contact</span>
			</nav>
			<div className="btn">Download CV</div>
		</div>
	);
}
