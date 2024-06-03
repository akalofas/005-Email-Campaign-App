const Campaign = require('../../models/Campaign');

exports.trackOpen = async (req, res) => {
	const { campaignId, contactId } = req.params;
	try {
		await Campaign.updateOne(
			{ _id: campaignId, 'metrics.sent': { $gt: 0 } },
			{ $inc: { 'metrics.opened': 1 } }
		);
		res.writeHead(200, { 'Content-Type': 'image/png' });
		res.end(
			Buffer.from(
				'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wYAAwAB/URKNVkAAAAASUVORK5CYII=',
				'base64'
			)
		);
	} catch (error) {
		res.status(500).send('Tracking failed');
	}
};