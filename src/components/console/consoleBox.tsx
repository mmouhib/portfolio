import ConsoleTopBar from './consoleTopBar';
import Typewriter from '../home/typewriter';
import ConsoleCommand from './consoleCommand';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ConsoleBoxProps {
	consoleModalIsOpen: boolean;
	setConsoleModalIsOpen: (arg: boolean) => void;
}

const StyledConsoleTypewriter = styled.div`
	padding-right: 2px;
	font-family: 'JetBrains Mono', sans-serif;
	font-size: 20px;
	font-weight: normal;
	color: #e8eaef;
`;

export default function ConsoleBox(props: ConsoleBoxProps) {
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
		setCommandsArray([]);
		//if (ref.current) ref.current.innerHTML = '';
	}

	return (
		<div className="console">
			<ConsoleTopBar
				path={path}
				consoleModalIsOpen={props.consoleModalIsOpen}
				setConsoleModalIsOpen={props.setConsoleModalIsOpen}
			/>
			{clear && (
				<div className="console-box">
					<div className="console-content" ref={ref}>
						<StyledConsoleTypewriter>
							<Typewriter
								text="Hi, you can interact with this box as if it was a regular terminal"
								delay={50}
							/>
						</StyledConsoleTypewriter>
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
	);
}
