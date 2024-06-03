const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/emailSender');

exports.verifyEmail = async (req, res) => {
	const { token } = req.query;
	try {
		const user = await User.findOne({ verificationToken: token });
		if (!user) {
			return res.status(400).json({ message: 'Invalid token' });
		}
		if (user.tokenExpiration < Date.now()) {
			// Token has expired, generate a new one and resend email
			const newToken = jwt.sign(
				{ email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: '48h' }
			);
			user.verificationToken = newToken;
			user.tokenExpiration = Date.now() + 48 * 3600000; 

			await user.save();

			let frontendUrl =
				process.env.FRONT_PORT == '80'
					? process.env.FRONT_URL
					: `${process.env.FRONT_URL}:${process.env.FRONT_PORT}`;

			await sendEmail({
				to: user.email,
				subject: 'Verify Your Email',
				text: `Please verify your email by clicking on this link: http://${frontendUrl}/verify-email?token=${newToken}`,
			});

			return res
				.status(202)
				.json({
					message:
						'Token expired. A new verification email has been sent.',
				});
		}
        
		// If token is valid and not expired
		user.isVerified = true;
		user.verificationToken = null;
		user.tokenExpiration = null;
		await user.save();
		res.status(200).json({ message: 'Email verified successfully' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
