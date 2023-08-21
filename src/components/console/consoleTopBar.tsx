import { VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc';
import { MdOutlineClose } from 'react-icons/md';
import styled from 'styled-components';

interface ConsoleTopBarProps {
	path: string;
	consoleModalIsOpen: boolean;
	setConsoleModalIsOpen: (arg: boolean) => void;
}

const StyledConsoleTopBar = styled.div`
	width: 100%;
	height: 5%;
	min-height: 35px;
	background-color: #4205b7;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1%;

	& .window-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6vw;
	}

	& .path-container {
		margin-left: 10%;
		color: white;
		font-family: 'JetBrains Mono', sans-serif;
		font-size: small;
		font-weight: bold;
	}
`;

//todo: fix top bar hidden on content overflow.

export default function ConsoleTopBar(props: ConsoleTopBarProps) {
	return (
		<StyledConsoleTopBar>
			<div></div>
			<p className="path-container">mouhib@ouni:{props.path}</p>
			<div className="window-controls">
				<VscChromeMinimize color="white" size={15} />
				<VscChromeMaximize color="white" size={15} onClick={() => props.setConsoleModalIsOpen(true)} />
				<MdOutlineClose color="white" size={17} onClick={() => props.setConsoleModalIsOpen(false)} />
			</div>
		</StyledConsoleTopBar>
	);
}
