import styled from 'styled-components';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import HelpCommand from './commands/helpCommand';
import SocialsCommand from './commands/socialsCommand';
import InfoCommand from './commands/infoCommand';
import ErrorCommand from './commands/errorCommand';

interface ConsoleCommandProps {
	path: string;
	commandsArray: any;
	setCommandsArray: (x: any) => void;
	setClear: (x: boolean) => void;
	clearer: () => void;
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

	const commandsArray: string[] = [
		'cls',
		'clear',
		'help',
		'man',
		'info',
		'socials',
	];

	function keyDownHandler(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			setCommandIsLaunched(true);
			props.setCommandsArray([...props.commandsArray, '']);
			//used array in next line to avoid double if statements.
			if (['clear', 'cls'].includes(command.toLowerCase())) props.clearer();
		}
	}

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
							onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
								keyDownHandler(e);
							}}
						/>
					)}
				</div>
			</CommandSection>
			<p>
				{commandIsLaunched && (
					<>
						{!commandsArray.includes(command) && (
							<ErrorCommand command={command} />
						)}
					</>
				)}
				{commandIsLaunched && (
					<>{['help', 'man'].includes(command) && <HelpCommand />}</>
				)}
				{commandIsLaunched && <>{command == 'info' && <InfoCommand />}</>}
				{commandIsLaunched && (
					<>{command == 'socials' && <SocialsCommand />}</>
				)}
			</p>
		</StyledConsoleCommand>
	);
}
