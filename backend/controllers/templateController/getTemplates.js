const Template = require('../../models/Template');

exports.getTemplates = async (req, res) => {
	try {
		const templates = await Template.find({ userId: req.user.id });
		res.status(200).json(templates);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
