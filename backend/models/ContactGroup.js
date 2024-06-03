const mongoose = require('mongoose');

const contactGroupSchema = new mongoose.Schema({
	name: { type: String, required: true },
	contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const ContactGroup = mongoose.model('ContactGroup', contactGroupSchema);
module.exports = ContactGroup;
