const Template = require('../../models/Template');

exports.createTemplate = async (req, res) => {
	const { name, content, userId } = req.body;
	try {
		const template = new Template({ name, content, userId });
		await template.save();
		res.status(201).json(template);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};