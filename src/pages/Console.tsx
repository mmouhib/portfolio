import ConsoleTopBar from '../components/console/consoleTopBar';
import { useEffect, useRef, useState } from 'react';
import ConsoleCommand from '../components/console/consoleCommand';
import styled, { StyledComponent } from 'styled-components';
import Modal from 'react-modal';
import Typewriter from '../components/home/typewriter';

const customModalStyles: Modal.Styles = {
	content: {
		width: '100%',
		height: '100%',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		marginRight: '-50%',
		borderRadius: '4px',
		padding: '0',
		outline: 'none',
		border: 'none',
		backgroundColor: '#101010',
		boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
	},
	overlay: {
		backdropFilter: 'blur(10px)',
		backgroundColor: 'transparent',
	},
};

const StyledConsoleContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: var(--bg);
	padding: 2vh 3vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledConsole: StyledComponent<'div', any> = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: var(--bg);
	display: flex;
	align-items: center;
	justify-content: center;

	.console {
		width: 90%;
		height: 90%;
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
	}

	.console-box {
		width: 100%;
		height: 95%;
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

export default function Console() {
	const [path, setPath] = useState<string>('~/dev/react/portfolio');
	const [commandsArray, setCommandsArray] = useState<any>(['']);
	const [clear, setClear] = useState<boolean>(true);
	const [consoleModalIsOpen, setConsoleModalIsOpen] = useState<boolean>(true);

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
		<StyledConsoleContainer id="console">
			{!consoleModalIsOpen && (
				<ConsoleTopBar
					path="mouhib@ouni:~/dev/react/portfolio"
					consoleModalIsOpen={consoleModalIsOpen}
					setConsoleModalIsOpen={setConsoleModalIsOpen}
				/>
			)}
			<Modal isOpen={consoleModalIsOpen} style={customModalStyles}>
				<StyledConsole>
					<div className="console">
						<ConsoleTopBar
							path={path}
							consoleModalIsOpen={consoleModalIsOpen}
							setConsoleModalIsOpen={setConsoleModalIsOpen}
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
				</StyledConsole>
			</Modal>
		</StyledConsoleContainer>
	);
}
