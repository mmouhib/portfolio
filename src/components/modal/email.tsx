import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/modal/emailForm.scss';
import colors from '../../utils/colors';
import CustomInput from './customInput';

export default function ContactUs() {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: any) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					import.meta.env.VITE_SERVICE_ID,
					import.meta.env.VITE_TEMPLATE_ID,
					form.current,
					import.meta.env.VITE_PUBLIC_KEY
				)
				.then((result: any) => {
					console.log(result.text);
				})
				.catch((err: any) => {
					console.log(err);
				});
		}
	};

	return (
		<form className="contact-input-form" ref={form} onSubmit={sendEmail}>
			<div className="names-container">
				<CustomInput>
					<input
						className="contact-input first-name"
						placeholder="First Name"
						type="text"
						name="first_name"
					/>
				</CustomInput>

				<CustomInput>
					<input
						className="contact-input last-name"
						placeholder="Last Name"
						type="text"
						name="last_name"
					/>
				</CustomInput>
			</div>
			<CustomInput>
				<input
					className="contact-input email"
					placeholder="Email"
					type="email"
					name="user_email"
				/>
			</CustomInput>

			<textarea
				className="contact-input message"
				name="message"
				placeholder="Message"
			/>
			<input
				style={{ backgroundColor: colors.darkTheme.backgroundColor }}
				type="submit"
				className="contact-submit-button"
				value="Send"
			/>
		</form>
	);
}
