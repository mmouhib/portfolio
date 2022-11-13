import ConsoleTopBar from '../components/console/consoleTopBar';
import { useEffect, useRef, useState } from 'react';
import ConsoleCommand from '../components/console/consoleCommand';
import '../styles/pages/Console.scss';

export default function Console() {
	const [path, setPath] = useState<string>('~/dev/react/portfolio');
	const [commandsArray, setCommandsArray] = useState<any>(['']);
	const [clear, setClear] = useState<boolean>(true);

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!clear) setClear(true);
	}, [clear]);

	/**
	 * this method clears the innerHTML of the console content
	 * div when typing in a clear command using the ref object
	 */
	function clearConsole() {
		if (ref.current) ref.current.innerHTML = '';
	}

	return (
		<div className="console-container" id="console">
			<div className="console">
				<ConsoleTopBar path={path} />
				{clear && (
					<div className="console-box">
						<div className="console-content" ref={ref}>
							{commandsArray.map((_: any, index: number) => {
								return (
									<ConsoleCommand
										key={index}
										clearer={clearConsole}
										setClear={setClear}
										commandsArray={commandsArray}
										path={path}
										setCommandsArray={setCommandsArray}
									/>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
