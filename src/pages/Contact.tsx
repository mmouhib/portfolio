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
	const [hoveredIcon, setHoveredIcon] = useState<string>('');

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
							setHoveredIcon('one');
						}}
						onMouseLeave={() => {
							setHoveredIcon('');
						}}
					>
						<AiFillGithub
							size={30}
							color={
								hoveredIcon == 'two' || hoveredIcon == 'three'
									? 'grey'
									: 'white'
							}
						/>
					</a>

					{/* icon two */}
					<a
						href={links.linkedIn}
						id="two"
						onMouseEnter={() => {
							setHoveredIcon('two');
						}}
						onMouseLeave={() => {
							setHoveredIcon('');
						}}
					>
						<AiFillLinkedin
							size={30}
							color={
								hoveredIcon == 'one' || hoveredIcon == 'three'
									? 'grey'
									: 'white'
							}
						/>
					</a>

					{/* icon three */}
					<a
						href={`mailto:${links.email}`}
						id="three"
						onMouseEnter={() => {
							setHoveredIcon('three');
						}}
						onMouseLeave={() => {
							setHoveredIcon('');
						}}
					>
						<AiOutlineMail
							size={30}
							color={
								hoveredIcon == 'one' || hoveredIcon == 'two'
									? 'grey'
									: 'white'
							}
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
