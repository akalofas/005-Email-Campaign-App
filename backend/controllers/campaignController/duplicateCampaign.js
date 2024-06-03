const Campaign = require('../../models/Campaign');

exports.duplicateCampaign = async (req, res) => {
	const { id } = req.body;
	try {
		const campaign = await Campaign.findById(id);
		if (!campaign) {
			return res.status(404).json({ message: 'Campaign not found' });
		}
		const newCampaign = new Campaign({
			userId: campaign.userId,
			name: `${campaign.name} (Copy)`,
			subject: campaign.subject,
			content: campaign.content,
			selectedContacts: campaign.selectedContacts,
			selectedContactGroups: campaign.selectedContactGroups,
			scheduleDate: null,
		});
		await newCampaign.save();
		res.status(201).json(newCampaign);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};