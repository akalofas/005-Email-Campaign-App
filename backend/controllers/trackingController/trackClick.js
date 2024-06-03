const Campaign = require('../../models/Campaign');

exports.trackClick = async (req, res) => {
	const { campaignId, contactId } = req.params;
	try {
		await Campaign.updateOne(
			{ _id: campaignId, 'metrics.sent': { $gt: 0 } },
			{ $inc: { 'metrics.clicked': 1 } }
		);
		res.redirect('http://example.com');
	} catch (error) {
		res.status(500).send('Tracking failed');
	}
};