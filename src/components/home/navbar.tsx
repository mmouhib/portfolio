import { AiOutlineFileDone } from 'react-icons/ai';
import styled from 'styled-components';

interface INavbarProps {
	setModalIsOpen: (arg: boolean) => void;
}

const StyledNavbar = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	color: white;
	padding-top: 2vw;
	cursor: pointer;
	user-select: none;
	align-items: center;
	justify-content: space-around;

	& .logo {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.3em;
	}

	& .nav {
		display: flex;
		justify-content: space-around;
		width: 33%;
		font-family: Consolas, sans-serif;
		font-weight: 400;

		@media (max-width: 1000px) {
			display: none;
		}

		& span {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		& .underlines {
			height: 5px;
			width: 100px;
			background-color: purple;
		}

		& a {
			font-family: 'Montserrat', sans-serif;
			font-weight: bold;
			font-size: 1.1em;

			&:hover {
				color: rgb(187, 0, 187);
			}
		}
	}

	& .btn {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		padding: 10px;
		border-radius: 4px;
		font-weight: bold;
		gap: 10px;
		transition: color 0.2s ease-in-out, background-color 0.4s ease-in-out;
		background-color: var(--main);

		&:hover {
			background-color: white;
			color: var(--main);
		}
	}
`;

export default function Navbar(props: INavbarProps) {
	return (
		<StyledNavbar>
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
		</StyledNavbar>
	);
}
