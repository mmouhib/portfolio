import Modal from 'react-modal';
import ContactUs from './email';
import { IModalProps } from '../../utils/types';
import styled from 'styled-components';

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
		boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
	},
	overlay: {
		backdropFilter: 'blur(10px)',
		backgroundColor: 'transparent',
	},
};

const StyledModal = styled.div`
	width: 100%;
	height: 100%;
	font-family: inter, sans-serif;
	font-weight: bold;
	padding: 100px 40px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	background-color: #101010;
	color: white;
	gap: 10%;
`;

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
			<StyledModal>
				<h1>Contact me</h1>
				<ContactUs closeModal={closeModal} />
			</StyledModal>
		</Modal>
	);
}
