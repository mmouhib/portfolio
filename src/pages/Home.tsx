import Navbar from '../components/home/navbar';
import ResumeModal from '../components/home/resumeModal';
import { useState } from 'react';
import Typewriter from '../components/home/typewriter';
import homeAvatar from '../assets/homeAvatar.png';
import styled from 'styled-components';

const StyledHome = styled.div`
	width: 100vw;
	height: 100vh;
	font-family: 'JetBrains Mono', sans-serif;
	background-color: var(--bg);

	.home-content {
		width: 100%;
		height: 90%;
		display: flex;
		flex-direction: row;
		color: white;
		align-items: center;
		gap: 10%;
		justify-content: center;
	}

	@media (max-width: 600px) {
		.home-content {
			flex-direction: column-reverse;
		}
	}

	.home-text-description {
		width: 35%;
		display: flex;
		flex-direction: column;
		gap: 2vh;

		& h2 {
			color: #cecece;
		}

		& p {
			color: #b0b0b0;
			font-size: 1.1em;
		}

		@media (max-width: 600px) {
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 3vw;
			width: 70%;
		}

		& .about span {
			color: var(--main);
		}
	}

	.home-image-container {
		width: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4%;
		background-color: rgba(121, 42, 245, 0.35);
		border-radius: 30% 70% 70% 30% / 58% 43% 57% 42%;

		animation: border-radius-transform 5s ease-in 1s infinite running;

		@keyframes border-radius-transform {
			50% {
				border-radius: 63% 37% 22% 78% / 57% 73% 27% 43%;
			}
			100% {
				border-radius: 30% 70% 70% 30% / 58% 43% 57% 42%;
			}
		}

		& img {
			width: 100%;
		}
	}

	.home-typewriter-container {
		padding-right: 2px;
		font-family: 'JetBrains Mono', sans-serif;
		font-size: 4vw;
		color: var(--main);
	}
`;

export default function Home() {
	const [resumeModalState, setResumeModalState] = useState<boolean>(false);
	return (
		<StyledHome id="home">
			<Navbar setModalIsOpen={setResumeModalState} />
			<div className="home-content">
				<div className="home-text-description">
					<h1>
						Hey there! i'm
						<div className="home-typewriter-container">
							<Typewriter text="Mouhib Ouni" delay={200} />
						</div>
					</h1>
					<h2>Junior Software developer.</h2>
					<p className="about">
						Hello! i'm and junior <span>mobile</span> and <span>web</span> developer who's looking
						forward to enhance his skills and dive deeper into the software development field.
					</p>
				</div>
				<div className="home-image-container">
					<img src={homeAvatar} alt="home image" />
				</div>
			</div>
			<ResumeModal modalIsOpen={resumeModalState} setModalIsOpen={setResumeModalState} />
		</StyledHome>
	);
}
