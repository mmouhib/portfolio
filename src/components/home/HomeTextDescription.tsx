import styled from 'styled-components';
import Typewriter from './typewriter';

const StyledHomeTextDescription = styled.div`
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
`;

export default function HomeTextDescription() {
	return (
		<StyledHomeTextDescription>
			<h1>
				Hey there! i'm
				<Typewriter />
			</h1>
			<h2>Junior Software developer</h2>
			<p>
				Student and junior <span>mobile</span> and <span>web</span>{' '}
				developer looking to enhance his skills and dive deeper into the
				software development field.
			</p>
		</StyledHomeTextDescription>
	);
}
