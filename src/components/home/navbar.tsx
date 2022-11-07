import '../../styles/home/navbar.scss';

export default function Navbar() {
	return (
		<div className="nav-container">
			<div className="logo"> {'>'}_mouhib</div>
			<nav className="nav">
				<span>Home</span>
				<span>About Me</span>
				<span>Portfolio</span>
				<span>Stats</span>
				<span>Contact</span>
			</nav>
			<div className="btn">Download CV</div>
		</div>
	);
}
