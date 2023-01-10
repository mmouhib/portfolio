import Modal from 'react-modal';

const customModalStyles: Modal.Styles = {
	content: {
		width: '50%',
		height: '50%',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		marginRight: '-50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	// overlay: {
	// 	background: 'transparent',
	// },
};

interface IModalProps {
	modalIsOpen: boolean;
	setModalIsOpen: (arg: boolean) => void;
}

export default function CustomModal({
	modalIsOpen,
	setModalIsOpen,
}: IModalProps) {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={() => {
				setModalIsOpen(false);
			}}
			style={customModalStyles}
			contentLabel="contact-modal"
		>
			<h1>Message me:</h1>
			<input />
		</Modal>
	);
}
