import '../../../styles/console/commands/helpCommand.scss';

export default function HelpCommand() {
	return (
		<div>
			<p>
				Welcome, here is a list of the available commands. feel free to try
				them out to get more info!
			</p>
			<div className="commands-list">
				<ul>
					<li>clear</li>
					<li>info</li>
					<li>socials</li>
					<li>help/man</li>
					{/*<li>projects</li>*/}
				</ul>
			</div>
		</div>
	);
}
