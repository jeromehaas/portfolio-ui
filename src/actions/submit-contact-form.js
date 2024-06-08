'use server';

// IMPORTS
import nodemailer from 'nodemailer';
import {createHtmlTemplate, createTextTemplate} from '@/email-templates/contact-form-templates';
import {redirect} from 'next/navigation';

// SEND EMAIL
const submitContactForm = async({values}) => {
	
	// TRY-CATCH ERROR
	try {
		
		// GET ENV-VARIABLES
		const {
			MAIL_HOST,
			MAIL_PORT,
			MAIL_USER,
			MAIL_PASS,
		} = process.env;
		
		// CREATE TRANSPORTER
		const transporter = nodemailer.createTransport({
			host: MAIL_HOST,
			port: MAIL_PORT,
			secure: false,
			secureConnection: false,
			auth: {
				user: MAIL_USER,
				pass: MAIL_PASS,
			},
		});
		
		// CREATE TEMPLATES
		let htmlTemplate = createHtmlTemplate(values);
		let textTemplate = createTextTemplate(values);
		
		
		// SETUP OPTIONS
		const mailOptions = {
			from: 'no-reply@jeromehaas.ch',
			to: 'hello@jeromehaas.ch',
			subject: 'New message from website',
			text: textTemplate,
			html: htmlTemplate,
		};
		
		// SEND EMAIL
		await transporter.sendMail(mailOptions);
		
	}
	
	// HANDLE ERRORS
	catch (error) {
		
		// REDIRECT TO ERROR-PAGE
		redirect('/');
		
	}
	
};

// EXPORTS
export {
	submitContactForm,
};