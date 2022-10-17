import styled from 'styled-components';
import colors from '../utils/colors';
import ConsoleTopBar from '../components/home/consoleTopBar';
import { useState } from 'react';

const StyledConsole = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.darkTheme.backgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledConsoleContainer = styled.div`
	width: 50%;
	height: 60%;
	background-color: #2b0473;
	border-radius: 10px;
`;

const StyledConsoleBody = styled.div`
	width: 100%;
	height: 95%;
`;

const StyledConsoleContent = styled.div`
	width: 70%;
	height: 95%;
	padding: 5%;
	display: flex;
	justify-content: center;
	color: white;
	font-family: 'JetBrains Mono', sans-serif;
`;

export default function Console() {
	const [path, setPath] = useState<string>('~/dev/react/portfolio');
	return (
		<StyledConsole>
			<StyledConsoleContainer>
				<ConsoleTopBar path={path} />
				<StyledConsoleBody>
					<StyledConsoleContent>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Adipisci doloremque enim esse et ex molestiae nesciunt
							nulla officiis pariatur quas?
						</p>
					</StyledConsoleContent>
				</StyledConsoleBody>
			</StyledConsoleContainer>
		</StyledConsole>
	);
}
