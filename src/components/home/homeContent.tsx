import styled from 'styled-components';
import HomeTextDescription from './HomeTextDescription';
import HomeImageContainer from './HomeImageContainer';

const StyledHomeContent = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: row;
	color: white;
	align-items: center;
	gap: 10%;
	justify-content: center;

	@media (max-width: 600px) {
		flex-direction: column-reverse;
	}
`;

export default function HomeContent() {
	return (
		<StyledHomeContent>
			<HomeTextDescription />
			<HomeImageContainer />
		</StyledHomeContent>
	);
}
