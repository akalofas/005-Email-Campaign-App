const ContactGroup = require('../../models/ContactGroup');

exports.getContactGroups = async (req, res) => {
	try {
		const contactGroups = await ContactGroup.find({
			userId: req.user.id,
		}).populate('contacts');
		res.status(200).json(contactGroups);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
