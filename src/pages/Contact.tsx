import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillGitlab } from 'react-icons/ai';
import { IoIosContacts } from 'react-icons/io';
import '../styles/pages/Contact.scss';
import Modal from '../components/modal/modal';
import { useState } from 'react';

const links = {
	github: 'https://github.com/mmouhib',
	gitlab: 'https://gitlab.com/mouhibb',
	linkedIn: 'https://www.linkedin.com/in/mmouhib',
	email: 'mouhibouni@outlook.com',
};

export default function Contact() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [hoveredIconIndex, sethoveredIconIndex] = useState<string>('');

	const clearHoveredIndex = (): void => {
		sethoveredIconIndex('');
	};

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
					{/* icon one */}
					<a
						href={links.github}
						id="one"
						onMouseEnter={() => {
							sethoveredIconIndex('one');
						}}
						onMouseLeave={clearHoveredIndex}
					>
						<AiFillGithub size={30} color={['', 'one'].includes(hoveredIconIndex) ? 'white' : 'grey'} />
					</a>

					<a
						href={links.gitlab}
						id="two"
						onMouseEnter={() => {
							sethoveredIconIndex('two');
						}}
						onMouseLeave={clearHoveredIndex}
					>
						<AiFillGitlab size={30} color={['', 'two'].includes(hoveredIconIndex) ? 'white' : 'grey'} />
					</a>

					{/* icon two */}
					<a
						href={links.linkedIn}
						id="three"
						onMouseEnter={() => {
							sethoveredIconIndex('three');
						}}
						onMouseLeave={clearHoveredIndex}
					>
						<AiFillLinkedin
							size={30}
							color={['', 'three'].includes(hoveredIconIndex) ? 'white' : 'grey'}
						/>
					</a>

					{/* icon three */}
					<a
						href={`mailto:${links.email}`}
						id="four"
						onMouseEnter={() => {
							sethoveredIconIndex('four');
						}}
						onMouseLeave={clearHoveredIndex}
					>
						<AiOutlineMail
							size={30}
							color={['', 'four'].includes(hoveredIconIndex) ? 'white' : 'grey'}
						/>
					</a>
				</div>
			</div>
			<div className="contact-copyrights">
				<p>© Ouni Mouhib {new Date().getFullYear()}</p>
			</div>
		</div>
	);
}
