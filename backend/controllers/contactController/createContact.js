const Contact = require('../../models/Contact');

exports.createContact = async (req, res) => {
	const { name, email, userId } = req.body;
	try {
		const contact = new Contact({ name, email, userId });
		await contact.save();
		res.status(201).json(contact);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
