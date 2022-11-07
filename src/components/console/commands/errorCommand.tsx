import '../../../styles/console/commands/errorCommand.scss';

interface ErrorCommandProps {
	command: string;
}

export default function ErrorCommand(props: ErrorCommandProps) {
	return (
		<div className="error-command-container">
			<p>
				<span>{props.command}</span>: Command Not found
			</p>
			<p>
				Try using <span>help</span> instead
			</p>
		</div>
	);
}
