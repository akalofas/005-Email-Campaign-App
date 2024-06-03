const Campaign = require('../../models/Campaign');

exports.createCampaign = async (req, res) => {
	const { userId, name, subject, content } = req.body;
	try {
		const campaign = new Campaign({ userId, name, subject, content });
		await campaign.save();
		res.status(201).json(campaign);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};