import ConsoleTopBar from './consoleTopBar';
import Typewriter from '../home/typewriter';
import ConsoleCommand from './consoleCommand';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ConsoleBoxProps {
	consoleModalIsOpen: boolean;
	setConsoleModalIsOpen: (arg: boolean) => void;
}

const StyledConsoleBox = styled.div<{ modalIsOpen: boolean }>`
	background-color: #2b0473;
	border-radius: 10px;
	overflow: hidden;
	width: ${(props) => (props.modalIsOpen ? '100%' : '60%')};
	height: ${(props) => (props.modalIsOpen ? '100%' : '60%')};

	& ::-webkit-scrollbar {
		width: 0;
	}

	@media (max-width: 1280px) {
		width: 70%;
		height: 70%;
	}

	@media (max-width: 850px) {
		width: 90%;
		height: 90%;
	}

	.console-box {
		overflow: scroll;
		//next two lines to remove scrollbars of the overflow
		padding: 0 17px 17px 0;
		box-sizing: content-box;
	}

	.console-content {
		width: 90%;
		height: 95%;
		padding: 5%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 10%;
		color: white;
		font-family: 'JetBrains Mono', sans-serif;
	}
`;

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
		<StyledConsoleBox modalIsOpen={props.consoleModalIsOpen}>
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
		</StyledConsoleBox>
	);
}
