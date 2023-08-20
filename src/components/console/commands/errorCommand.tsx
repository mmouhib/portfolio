interface ErrorCommandProps {
	command: string;
}

export default function ErrorCommand(props: ErrorCommandProps) {
	return (
		<div className="error-command-container">
			<p>
				<span style={{ color: 'red' }}>{props.command}</span>: Command Not found
			</p>
			<p>
				Try using <span style={{ color: 'red' }}>help</span> instead
			</p>
		</div>
	);
}
