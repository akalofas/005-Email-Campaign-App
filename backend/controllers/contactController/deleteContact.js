const Contact = require('../../models/Contact');

exports.deleteContact = async (req, res) => {
	const { contactId } = req.params;
	try {
		await Contact.findByIdAndDelete(contactId);
		res.status(200).json({ message: 'Contact deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
