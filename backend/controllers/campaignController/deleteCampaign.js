const Campaign = require('../../models/Campaign');

exports.deleteCampaign = async (req, res) => {
	const { id } = req.params;
	try {
		await Campaign.findByIdAndDelete(id);
		res.status(200).json({ message: 'Campaign deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};