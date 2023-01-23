import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/modal/emailForm.scss';
import CustomInput from './customInput';
import { MdContactPage } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Alert from './alert';

export default function ContactUs(props: { closeModal: () => void }) {
	const form = useRef<HTMLFormElement>(null);

	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		setInterval(() => {
			setError(false);
		}, 3000);
	}, [error]);

	const sendEmail = (e: any) => {
		e.preventDefault();

		if (form.current) {
			if (firstName && lastName && email && message) {
				emailjs
					.sendForm(
						import.meta.env.VITE_SERVICE_ID,
						import.meta.env.VITE_TEMPLATE_ID,
						form.current,
						import.meta.env.VITE_PUBLIC_KEY
					)
					.then(() => {
						props.closeModal();
					})
					.catch(() => {
						setError(true);
					});
			} else {
				setError(true);
			}
		}
	};

	return (
		<form className="contact-input-form" ref={form} onSubmit={sendEmail}>
			{error && <Alert />}
			<div className="names-container">
				<CustomInput width="47%" icon={MdContactPage}>
					<input
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
						className="contact-input first-name"
						placeholder="First Name"
						type="text"
						name="first_name"
					/>
				</CustomInput>

				<CustomInput width="47%" icon={BsFillPersonFill}>
					<input
						value={lastName}
						onChange={(e) => {
							setLastName(e.target.value);
						}}
						className="contact-input last-name"
						placeholder="Last Name"
						type="text"
						name="last_name"
					/>
				</CustomInput>
			</div>
			<CustomInput width="100%" icon={MdEmail}>
				<input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					className="contact-input email"
					placeholder="Email"
					type="email"
					name="user_email"
				/>
			</CustomInput>

			<textarea
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				className="contact-input message"
				name="message"
				placeholder="Message"
			/>
			<input type="submit" className="contact-submit-button" value="Send" />
		</form>
	);
}
