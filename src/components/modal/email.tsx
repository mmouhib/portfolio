import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/modal/emailForm.scss';
import colors from '../../utils/colors';
import CustomInput from './customInput';
import emailJsKeys from '../../creds';

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				emailJsKeys.serviceId,
				emailJsKeys.templateId,
				// @ts-ignore
				form.current,
				emailJsKeys.publicKey
			)
			.then(
				(result: any) => {
					console.log(result.text);
				},
				(error: any) => {
					console.log(error.text);
				}
			);
	};

	return (
		// @ts-ignore
		<form className="contact-input-form" ref={form} onSubmit={sendEmail}>
			<div className="names-container">
				<CustomInput>
					<input
						className="contact-input first-name"
						placeholder="First Name"
						type="text"
						name="user_name"
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
};
