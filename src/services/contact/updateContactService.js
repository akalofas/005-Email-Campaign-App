import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/contacts/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/contacts/`;

const updateContactService = async (id, contactData) => {
	const response = await axios.put(`${API_URL}${id}`, contactData);
	return response.data;
};

export default { updateContactService };
