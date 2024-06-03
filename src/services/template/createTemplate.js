import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/template/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/template/`;

const createTemplate = async (templateData) => {
	const response = await axios.post(API_URL, templateData);
	return response.data;
};


export default { createTemplate };