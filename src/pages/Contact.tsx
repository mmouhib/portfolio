import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { IoIosContacts } from 'react-icons/io';
import '../styles/pages/Contact.scss';
import Modal from '../components/modal/modal';
import { useState } from 'react';

const links = {
	github: 'https://github.com/mmouhib',
	linkedIn: 'https://www.linkedin.com/in/mmouhib',
	email: 'mouhibouni@outlook.com',
};

export default function Contact() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	return (
		<div className="contact-container" id="contact">
			<Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
			<div className="contact-content">
				<p>Connect with me</p>
				<div
					className="button"
					onClick={() => {
						setModalIsOpen(true);
					}}
				>
					<IoIosContacts /> contact
				</div>
				<div className="socials-links-container">
					<a href={links.github}>
						<AiFillGithub size={30} />
					</a>

					<a href={links.linkedIn}>
						<AiFillLinkedin size={30} />
					</a>

					<a href={`mailto:${links.email}`}>
						<AiOutlineMail size={30} />
					</a>
				</div>
			</div>
			<div className="contact-copyrights">
				<p>© Ouni Mouhib {new Date().getFullYear()}</p>
			</div>
		</div>
	);
}
