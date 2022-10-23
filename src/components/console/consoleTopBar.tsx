import styled from 'styled-components';
import { VscChromeMaximize, VscChromeMinimize } from 'react-icons/Vsc';
import { MdOutlineClose } from 'react-icons/Md';

interface ConsoleTopBarProps {
	path: string;
}

const StyledConsoleTopBar = styled.div`
	width: 100%;
	height: 9%;
	min-height: 35px;
	background-color: #4205b7;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1%;
`;

const StyledWindowControls = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.6vw;
`;

const StyledPathText = styled.p`
	margin-left: 10%;
	color: white;
	font-family: 'JetBrains Mono', sans-serif;
	font-size: small;
	font-weight: bold;
`;

export default function ConsoleTopBar(props: ConsoleTopBarProps) {
	return (
		<StyledConsoleTopBar>
			<div></div>
			<StyledPathText>mouhib@ouni:{props.path}</StyledPathText>
			<StyledWindowControls>
				<VscChromeMinimize color="white" size={15} />
				<VscChromeMaximize color="white" size={15} />
				<MdOutlineClose color="white" size={17} />
			</StyledWindowControls>
		</StyledConsoleTopBar>
	);
}
