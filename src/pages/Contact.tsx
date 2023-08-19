import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillGitlab } from 'react-icons/ai';
import { IoIosContacts } from 'react-icons/io';
import Modal from '../components/modal/modal';
import { useState } from 'react';
import styled from 'styled-components';

const links = {
	github: 'https://github.com/mmouhib',
	gitlab: 'https://gitlab.com/mouhibb',
	linkedIn: 'https://www.linkedin.com/in/mmouhib',
	email: 'mouhibouni@outlook.com',
};

const StyledContact = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	background-color: var(--bg);

	& .contact-content {
		width: 100vw;
		height: 95%;
		font-family: sans-serif;
		font-weight: 600;
		font-size: 6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 3vh;
		color: lightgray;
		user-select: none;
	}

	& .button {
		border-radius: 7px;
		font-size: 1.5rem;
		padding: 10px;
		background-color: var(--main);
		color: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		transition: color 1s ease-in-out, background-color 0.2s ease-in-out;

		&:hover {
			background-color: white;
			color: var(--main);
		}
	}

	& .socials-links-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1vw;

		& a {
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	& .contact-copyrights {
		height: 5%;
		width: 100vw;
		text-align: center;
		color: lightgray;
		user-select: none;
	}

	& .note {
		color: rgb(255, 83, 83);
		text-align: center;
	}

	& .note-container {
		margin: 10px;
	}
`;

export default function Contact() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [hoveredIconIndex, setHoveredIconIndex] = useState<string>('');

	const clearHoveredIndex = (): void => {
		setHoveredIconIndex('');
	};

	const openModal = (): void => {
		setModalIsOpen(true);
	};

	return (
		<StyledContact id="contact">
			<Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
			<div className="contact-content">
				<p>Connect with me</p>
				<div className="button" onClick={openModal}>
					<IoIosContacts /> contact
				</div>
				<div className="socials-links-container">
					{/* icon one */}
					<a
						href={links.github}
						id="one"
						onMouseEnter={() => {
							setHoveredIconIndex('one');
						}}
						onMouseLeave={clearHoveredIndex}
					>
						<AiFillGithub size={30} color={['', 'one'].includes(hoveredIconIndex) ? 'white' : 'grey'} />
					</a>

					<a
						href={links.gitlab}
						id="two"
						onMouseEnter={() => {
							setHoveredIconIndex('two');
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
							setHoveredIconIndex('three');
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
							setHoveredIconIndex('four');
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
			<div className="note-container">
				<p className="note">Work in progress</p>
				<p className="note">feel free to open issues on the project's github repo in my profile</p>
			</div>
			<div className="contact-copyrights">
				<p>© Ouni Mouhib {new Date().getFullYear()}</p>{' '}
			</div>
		</StyledContact>
	);
}
