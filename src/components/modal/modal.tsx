import Modal from 'react-modal';
import ContactUs from './email';
import '../../styles/modal/modalBody.scss';
import { RiContactsLine } from 'react-icons/Ri';

const customModalStyles: Modal.Styles = {
	content: {
		width: '30%',
		height: '60%',
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
		boxShadow:
			'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
	},
	overlay: {
		backdropFilter: 'blur(10px)',
		backgroundColor: 'transparent',
	},
};

interface IModalProps {
	modalIsOpen: boolean;
	setModalIsOpen: (arg: boolean) => void;
}

export default function CustomModal(props: IModalProps) {
	const closeModal = () => {
		props.setModalIsOpen(false);
	};

	return (
		<Modal
			ariaHideApp={false}
			isOpen={props.modalIsOpen}
			onRequestClose={closeModal}
			style={customModalStyles}
			contentLabel="contact-modal"
		>
			<div className="modal-content">
				<h1>Contact me</h1>
				{/*<RiContactsLine /> */}
				<ContactUs />
			</div>
		</Modal>
	);
}
