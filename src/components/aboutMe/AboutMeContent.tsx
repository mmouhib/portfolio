import styled from 'styled-components';
import ageCalculator from '../../static/ageCalculator';
import LanguageProgress from './LanguageProgress';
import colors from '../../utils/colors';

const StyledLeftSide = styled.div`
	width: 70%;
	height: 100vh;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
`;

const AnimationContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	& div {
		width: 300px;
		height: 300px;
		border-radius: 30px;

		@media (max-width: 1200px) {
			width: 35vw;
		}

		@media (max-width: 900px) {
			width: 60vw;
		}
	}
`;

const FirstBox = styled.div`
	position: absolute;
	background: rgba(187, 187, 187, 0.44);
	transform: rotate(10deg);
	animation: box-animation 3s ease-in 1s infinite running;

	@keyframes box-animation {
		50% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(10deg);
		}
	}
`;

const ContentBox = styled.div`
	background: lightgrey;
	padding: 50px;
	display: flex;
	z-index: 222;
	align-items: center;
	justify-content: center;
	font-family: 'Montserrat', sans-serif;
	color: ${colors.darkTheme.mainColor.darker};
	text-align: center;

	@media (max-width: 900px) {
		font-size: 0.7rem;
	}
`;

const LanguageProgressSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 3vw;
`;

export default function AboutMeContent() {
	return (
		<StyledLeftSide>
			<AnimationContainer>
				<FirstBox></FirstBox>
				<ContentBox>
					<p>
						Hello, i'm a {ageCalculator()} year old software development
						student from Tunisia, currently in my final bachelor year. i'm
						passionate about software development especially mobile and
						web.
					</p>
				</ContentBox>
			</AnimationContainer>
			<LanguageProgressSection>
				<LanguageProgress level="40%" language="Arabic" />
				<LanguageProgress level="70%" language="English" />
				<LanguageProgress level="40%" language="French" />
				<LanguageProgress level="70%" language="German" />
			</LanguageProgressSection>
		</StyledLeftSide>
	);
}
