import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ConsoleBox from '../components/console/consoleBox';

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

	.console-box-container {
		background-color: var(--bg);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.console-box-inside-modal {
		width: 90%;
		height: 90%;
	}

	.console-box-outside-modal {
		width: 60%;
		height: 60%;
	}
`;

export default function Console() {
	const [consoleModalIsOpen, setConsoleModalIsOpen] = useState<boolean>(false);

	return (
		<StyledConsoleContainer id="console">
			<ConsoleBox consoleModalIsOpen={consoleModalIsOpen} setConsoleModalIsOpen={setConsoleModalIsOpen} />

			<Modal isOpen={consoleModalIsOpen} style={customModalStyles} preventScroll={true}>
				<ConsoleBox
					consoleModalIsOpen={consoleModalIsOpen}
					setConsoleModalIsOpen={setConsoleModalIsOpen}
				/>
			</Modal>
		</StyledConsoleContainer>
	);
}
