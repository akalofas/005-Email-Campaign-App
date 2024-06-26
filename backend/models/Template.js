const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
	name: { type: String, required: true },
	content: { type: String, required: true },
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Template = mongoose.model('Template', templateSchema);
module.exports = Template;
