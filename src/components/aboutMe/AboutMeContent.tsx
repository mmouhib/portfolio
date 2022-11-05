import styled from 'styled-components';
import ageCalculator from '../../static/ageCalculator';

const StyledLeftSide = styled.div`
	width: 70%;
	height: 100vh;
	color: white;

	display: flex;
	align-items: center;
	justify-content: center;

	& div {
		width: 20vw;
		height: 30%;
		position: absolute;
		border-radius: 50px;

		@media (max-width: 1200px) {
			width: 35vw;
		}

		@media (max-width: 900px) {
			width: 60vw;
		}
	}
`;

const FirstBox = styled.div`
	background: rgba(112, 57, 129, 0.44);

	animation: first-box-animation 5s ease-in 1s infinite running;

	@keyframes first-box-animation {
		50% {
			transform: rotate(70deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
`;

const SecondBox = styled.div`
	background: rgba(95, 50, 108, 0.25);

	animation: second-box-animation 5s ease-in 1s infinite running;

	@keyframes second-box-animation {
		50% {
			transform: rotate(130deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
`;

const ContentBox = styled.div`
	background: rgba(78, 40, 91, 0.63);
	padding: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Montserrat', sans-serif;
	color: lightgrey;
	text-align: center;
`;

export default function AboutMeContent() {
	return (
		<StyledLeftSide>
			<FirstBox></FirstBox>
			<SecondBox></SecondBox>
			<ContentBox>
				<p>
					Hello, i'm a {ageCalculator()} year old software development
					student from Tunisia, currently in my final bachelor year. i'm
					passionate about software development especially mobile and web.
				</p>
			</ContentBox>
		</StyledLeftSide>
	);
}
