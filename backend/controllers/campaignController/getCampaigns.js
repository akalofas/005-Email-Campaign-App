const Campaign = require('../../models/Campaign');

exports.getCampaigns = async (req, res) => {
	try {
		const campaigns = await Campaign.find({ userId: req.user.id });
		res.status(200).json(campaigns);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
