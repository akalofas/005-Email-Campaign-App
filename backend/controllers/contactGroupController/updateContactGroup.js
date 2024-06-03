const ContactGroup = require('../../models/ContactGroup');

exports.updateContactGroup = async (req, res) => {
	const { groupId } = req.params;
	try {
		const contactGroup = await ContactGroup.findByIdAndUpdate(
			groupId,
			req.body,
			{ new: true }
		).populate('contacts');
		res.status(200).json(contactGroup);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
