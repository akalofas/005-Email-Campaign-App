const Contact = require('../../models/Contact');

exports.getContacts = async (req, res) => {
	try {
		const contacts = await Contact.find({ userId: req.user.id });
		res.status(200).json(contacts);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
