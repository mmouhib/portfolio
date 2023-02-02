import { ChangeEvent, KeyboardEvent, useState } from 'react';
import HelpCommand from './commands/helpCommand';
import SocialsCommand from './commands/socialsCommand';
import InfoCommand from './commands/infoCommand';
import ErrorCommand from './commands/errorCommand';
import '../../styles/console/consoleCommands.scss';

interface ConsoleCommandProps {
	path: string;
	commandsArray: any;
	setCommandsArray: (x: any) => void;
	setClear: (x: boolean) => void;
	clearer: () => void;
}

export default function ConsoleCommand(props: ConsoleCommandProps) {
	const [command, setCommand] = useState<string>('');
	const [commandIsLaunched, setCommandIsLaunched] = useState<boolean>(false);

	const commandsArray: string[] = ['cls', 'clear', 'help', 'man', 'info', 'socials'];

	function keyDownHandler(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			setCommandIsLaunched(true);
			props.setCommandsArray([...props.commandsArray, '']);
			if (['clear', 'cls'].includes(command.toLowerCase())) props.clearer();
		}
	}

	return (
		<div className="console-commands-container">
			<div className="commands-section">
				<p className="path">{props.path}</p>
				<div>
					<span> {'>'} </span>
					{commandIsLaunched ? (
						<span className="command-span">{command}</span>
					) : (
						<input
							type="text"
							autoFocus={window.location.href.endsWith('console')}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setCommand(e.target.value);
							}}
							onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
								keyDownHandler(e);
							}}
						/>
					)}
				</div>
			</div>

			{commandIsLaunched && (
				<>
					{!commandsArray.includes(command) && <ErrorCommand command={command} />}
					{['help', 'man'].includes(command) && <HelpCommand />}
					{command == 'info' && <InfoCommand />}
					{command == 'socials' && <SocialsCommand />}
				</>
			)}
		</div>
	);
}
