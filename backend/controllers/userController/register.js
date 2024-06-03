const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../utils/emailSender');

exports.register = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'Email already in use' });
		}
		const user = new User({ email, password });
		const token = jwt.sign({ email }, process.env.JWT_SECRET, {
			expiresIn: '48h',
		});
		user.verificationToken = token;
		user.tokenExpiration = Date.now() + 48 * 3600000;

		await user.save();

        let frontendUrl;
        if (!process.env.FRONT_PORT == '80') {
            frontendUrl = `${process.env.FRONT_URL}:${process.env.FRONT_PORT}`;
        } else {
            frontendUrl = `${process.env.FRONT_URL}`;
        }
        
		await sendEmail({
			to: email,
			subject: 'Verify Your Email',
			text: `Please verify your email by clicking on this link: http://${frontendUrl}:/verify-email?token=${token}`,
		});

		res.status(201).json({
			message: 'User registered, verification email sent',
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
