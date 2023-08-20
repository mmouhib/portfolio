import Modal from 'react-modal';
import { IModalProps } from '../../utils/types';
import frenchIcon from '../../assets/flags/fr.png';
import englishIcon from '../../assets/flags/eng.png';
import englishResume from '../../assets/resumes/englishResume.pdf';
import frenchResume from '../../assets/resumes/frenchResume.pdf';
import styled from 'styled-components';

const StyledResumeModal = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	& p {
		color: white;
	}

	& a {
		width: 40%;
		height: 50%;
		border: 1px solid rgb(105, 105, 105);
		border-radius: 7px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 10px;
		cursor: pointer;
		user-select: none;

		& img {
			width: 50%;
		}

		&:hover {
			background-color: #2e2e2e;
		}
	}
`;

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
		minWidth: '400px',
		backgroundColor: '#101010',
		boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
	},
	overlay: {
		backdropFilter: 'blur(10px)',
		backgroundColor: 'transparent',
	},
};

export default function ResumeModal(props: IModalProps) {
	const closeModal = () => {
		props.setModalIsOpen(false);
	};

	return (
		<Modal
			ariaHideApp={false}
			isOpen={props.modalIsOpen}
			onRequestClose={closeModal}
			style={customModalStyles}
			contentLabel="resume-modal"
		>
			<StyledResumeModal>
				<a href={frenchResume} download="frenchResume" target="_blank">
					<img src={frenchIcon} alt="french" />
					<p>french</p>
				</a>
				<a href={englishResume} download="englishResume" target="_blank">
					<img src={englishIcon} alt="french" />
					<p>english</p>
				</a>
			</StyledResumeModal>
		</Modal>
	);
}
