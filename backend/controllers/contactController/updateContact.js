const Contact = require('../../models/Contact');

exports.updateContact = async (req, res) => {
	const { contactId } = req.params;
	try {
		const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
			new: true,
		});
		res.status(200).json(contact);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
