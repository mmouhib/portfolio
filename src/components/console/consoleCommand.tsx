import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import HelpCommand from './commands/helpCommand';
import SocialsCommand from './commands/socialsCommand';

interface ConsoleCommandProps {
	path: string;
	commandsArray: any;
	setCommandsArray: (x: any) => any;
}

const StyledConsoleCommand = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.3vh;
`;

const CommandSection = styled.div`
	font-weight: bold;
	font-size: large;
	display: flex;
	flex-direction: row;
	gap: 0.7vw;
`;

const StyledInput = styled.input`
	background-color: transparent;
	border: 0;
	color: #46ce25;
	font-family: 'JetBrains Mono', sans-serif;
	font-weight: bold;
	font-size: large;

	&:focus {
		outline: 0;
	}
`;

const StyledPath = styled.p`
	color: #adbce3;
`;

const StyledCommandSpan = styled.span`
	background-color: transparent;
	border: 0;
	color: #46ce25;
	font-family: 'JetBrains Mono', sans-serif;
	font-weight: bold;
	font-size: large;
`;

export default function ConsoleCommand(props: ConsoleCommandProps) {
	const [command, setCommand] = useState<string>('');
	const [commandIsLaunched, setCommandIsLaunched] = useState<boolean>(false);

	return (
		<StyledConsoleCommand>
			<CommandSection>
				<StyledPath>{props.path}</StyledPath>
				<div>
					<span> {'>'} </span>
					{commandIsLaunched ? (
						<StyledCommandSpan>{command}</StyledCommandSpan>
					) : (
						<StyledInput
							type="text"
							autoFocus
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setCommand(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									setCommandIsLaunched(true);
									props.setCommandsArray([...props.commandsArray, '']);
								}
							}}
						/>
					)}
				</div>
			</CommandSection>
			{/*<HelpCommand />*/}
			<p>{commandIsLaunched && <SocialsCommand />}</p>
		</StyledConsoleCommand>
	);
}
