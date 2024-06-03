exports.logout = (req, res) => {
	res.cookie('token', '', { maxAge: 1 });
	res.status(200).json({ message: 'Logout successful' });
};