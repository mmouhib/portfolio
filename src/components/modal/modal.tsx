import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
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
			style={customStyles}
			contentLabel="contact-modal"
		>
			<h1>Modal content</h1>
		</Modal>
	);
}
