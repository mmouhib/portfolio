import styled from 'styled-components';
import homeAvatar from '../../assets/homeAvatar.png';

const StyledHomeImageContainer = styled.div`
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
`;

const StyledAvatarImage = styled.img`
	width: 100%;

	@media (max-width: 500px) {
		width: 60%;
	}
`;

export default function HomeImageContainer() {
	return (
		<StyledHomeImageContainer>
			<StyledAvatarImage src={homeAvatar} alt="aa" />
		</StyledHomeImageContainer>
	);
}
