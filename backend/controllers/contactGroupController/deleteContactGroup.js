const ContactGroup = require('../../models/ContactGroup');

exports.deleteContactGroup = async (req, res) => {
	const { groupId } = req.params;
	try {
		await ContactGroup.findByIdAndDelete(groupId);
		res.status(200).json({ message: 'Contact group deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
