import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/contact-groups/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/contact-groups/`;

const createContactGroupService = async (groupData) => {
	const response = await axios.post(API_URL, groupData);
	return response.data;
};

export default { createContactGroupService };
