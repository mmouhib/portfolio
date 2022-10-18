import styled from 'styled-components';

const StyledHelpCommand = styled.div`
	& div {
		display: flex;
		align-items: center;
		margin-top: 0.8vh;
		margin-left: 20%;
		font-weight: 300;
	}
`;

export default function HelpCommand() {
	return (
		<StyledHelpCommand>
			<p>
				Welcome, here is a list of the available commands. feel free to try
				them out to get more info!
			</p>
			<div>
				<ul>
					<li>clear</li>
					<li>name</li>
					<li>age</li>
					<li>socials</li>
					<li>help/man</li>
					<li>projects</li>
				</ul>
			</div>
		</StyledHelpCommand>
	);
}
