import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/contacts/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/contacts/`;

const deleteContactService = async (id) => {
	await axios.delete(`${API_URL}${id}`);
};

export default { deleteContactService };
