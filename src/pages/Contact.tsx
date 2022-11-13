import {
	AiFillGithub,
	AiOutlineInstagram,
	AiFillLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai';
import ReactModal from 'react-modal';
import { IoIosContacts } from 'react-icons/io';

import '../styles/pages/Contact.scss';

export default function Contact() {
	return (
		<div className="contact-container">
			<div className="contact-content">
				<p>Connect with me</p>
				<div className="button">
					<IoIosContacts /> contact
				</div>
				<div className="socials-links-container">
					<AiFillGithub size={30} />
					<AiOutlineInstagram size={30} />
					<AiFillLinkedin size={30} />
					<AiOutlineTwitter size={30} />
				</div>
			</div>
			<div className="contact-copyrights">
				<p>© Ouni Mouhib 2022</p>
			</div>
			<ReactModal />
		</div>
	);
}
