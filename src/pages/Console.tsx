import styled from 'styled-components';
import colors from '../utils/colors';
import ConsoleTopBar from '../components/console/consoleTopBar';
import { useState } from 'react';
import ConsoleCommand from '../components/console/consoleCommand';

const StyledConsole = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.darkTheme.backgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledConsoleContainer = styled.div`
	width: 60%;
	height: 70%;
	background-color: #2b0473;
	border-radius: 10px;
	overflow: hidden;

	@media (max-width: 1280px) {
		width: 70%;
		height: 70%;
	}

	@media (max-width: 850px) {
		width: 90%;
		height: 90%;
	}
`;

const StyledConsoleBody = styled.div`
	width: 100%;
	height: 95%;
	overflow: scroll;
	//next two lines to remove scrollbars of the overflow
	padding: 0 17px 17px 0;
	box-sizing: content-box;
`;

const StyledConsoleContent = styled.div`
	width: 90%;
	height: 95%;
	padding: 5%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 10%;
	color: white;
	font-family: 'JetBrains Mono', sans-serif;
`;

export default function Console() {
	const [path, setPath] = useState<string>('~/dev/react/portfolio');
	const [commandsArray, setCommandsArray] = useState<any>(['']);

	return (
		<StyledConsole>
			<StyledConsoleContainer>
				<ConsoleTopBar path={path} />
				<StyledConsoleBody>
					<StyledConsoleContent>
						{commandsArray.map(() => {
							return (
								<ConsoleCommand
									commandsArray={commandsArray}
									path={path}
									setCommandsArray={setCommandsArray}
								/>
							);
						})}
					</StyledConsoleContent>
				</StyledConsoleBody>
			</StyledConsoleContainer>
		</StyledConsole>
	);
}
