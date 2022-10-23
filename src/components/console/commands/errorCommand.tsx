import styled from 'styled-components';

interface ErrorCommandProps {
	command: string;
}

const StyledErrorCommand = styled.div`
	& span {
		color: red;
	}
`;

export default function ErrorCommand(props: ErrorCommandProps) {
	return (
		<StyledErrorCommand>
			<p>
				<span>{props.command}</span>: Command Not found
			</p>
			<p>
				Try using <span>help</span> instead
			</p>
		</StyledErrorCommand>
	);
}
