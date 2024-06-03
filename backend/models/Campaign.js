const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	name: { type: String, required: true },
	subject: { type: String, required: true },
	content: { type: String, required: true },
	status: {
		type: String,
		enum: ['Draft', 'Sent', 'Scheduled'],
		default: 'Draft',
	},
	metrics: {
		sent: { type: Number, default: 0 },
		opened: { type: Number, default: 0 },
		clicked: { type: Number, default: 0 },
		bounced: { type: Number, default: 0 },
		notOpened: { type: Number, default: 0 },
	},
});

const Campaign = mongoose.model('Campaign', campaignSchema);
module.exports = Campaign;
