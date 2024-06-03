const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: false,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_USERNAME,
		to: options.to,
		subject: options.subject,
		text: options.text,
		html: options.html,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent: %s', info.messageId);
		return { success: true, messageId: info.messageId };
	} catch (error) {
		console.error('Error sending email: %s', error);
		return { success: false, error: error };
	}
};

module.exports = sendEmail;
