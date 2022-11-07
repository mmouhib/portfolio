import { VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc';
import { MdOutlineClose } from 'react-icons/md';
import '../../styles/console/consoleTopBar.scss';

interface ConsoleTopBarProps {
	path: string;
}

//todo: fix top bar hidden on content overflow.

export default function ConsoleTopBar(props: ConsoleTopBarProps) {
	return (
		<div className="console-top-bar-container">
			<div></div>
			<p className="path-container">mouhib@ouni:{props.path}</p>
			<div className="window-controls">
				<VscChromeMinimize color="white" size={15} />
				<VscChromeMaximize color="white" size={15} />
				<MdOutlineClose color="white" size={17} />
			</div>
		</div>
	);
}
