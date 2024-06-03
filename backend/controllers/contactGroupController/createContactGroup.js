const ContactGroup = require('../../models/ContactGroup');

exports.createContactGroup = async (req, res) => {
	const { name, contacts, userId } = req.body;
	try {
		const contactGroup = new ContactGroup({ name, contacts, userId });
		await contactGroup.save();
		res.status(201).json(contactGroup);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
