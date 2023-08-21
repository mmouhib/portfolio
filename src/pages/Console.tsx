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
`;

const StyledConsole = styled.div<{ modalIsOpen: boolean }>`
	width: 100vw;
	height: 100vh;
	background-color: var(--bg);
	display: flex;
	align-items: center;
	justify-content: center;

	.console {
		width: ${(props) => (props.modalIsOpen ? '90%' : '60%')};
		height: ${(props) => (props.modalIsOpen ? '90%' : '60%')};
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

export default function Console() {
	const [consoleModalIsOpen, setConsoleModalIsOpen] = useState<boolean>(true);

	return (
		<StyledConsoleContainer id="console">
			<StyledConsole modalIsOpen={consoleModalIsOpen}>
				<ConsoleBox
					consoleModalIsOpen={consoleModalIsOpen}
					setConsoleModalIsOpen={setConsoleModalIsOpen}
				/>
			</StyledConsole>

			<Modal isOpen={consoleModalIsOpen} style={customModalStyles} preventScroll={true}>
				<StyledConsole modalIsOpen={consoleModalIsOpen}>
					<ConsoleBox
						consoleModalIsOpen={consoleModalIsOpen}
						setConsoleModalIsOpen={setConsoleModalIsOpen}
					/>
				</StyledConsole>
			</Modal>
		</StyledConsoleContainer>
	);
}
