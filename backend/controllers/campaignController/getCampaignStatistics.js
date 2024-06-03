const Campaign = require('../../models/Campaign');

exports.getCampaignStatistics = async (req, res) => {
	const { campaignId } = req.params;
	try {
		const campaign = await Campaign.findById(campaignId);
		if (!campaign) {
			return res.status(404).json({ message: 'Campaign not found' });
		}
		res.status(200).json(campaign.metrics);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
