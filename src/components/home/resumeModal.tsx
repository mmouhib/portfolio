import Modal from 'react-modal';
import '../../styles/home/resumeModal.scss';
import { IModalProps } from '../../utils/types';
import frenchIcon from '../../assets/flags/fr.png';
import englishIcon from '../../assets/flags/eng.png';
import englishResume from '../../assets/resumes/englishResume.pdf';
import frenchResume from '../../assets/resumes/frenchResume.pdf';

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
		boxShadow:
			'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
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
			<div className="modal-content">
				<a href={frenchResume} download="frenchResume" target="_blank">
					<img src={frenchIcon} alt="french" />
					<p>french</p>
				</a>
				<a href={englishResume} download="englishResume" target="_blank">
					<img src={englishIcon} alt="french" />
					<p>english</p>
				</a>
			</div>
		</Modal>
	);
}
