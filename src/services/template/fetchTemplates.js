import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/users/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/users/`;

const fetchTemplates = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

export default { fetchTemplates };
