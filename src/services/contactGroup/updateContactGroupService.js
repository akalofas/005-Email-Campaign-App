import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/contact-groups/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/contact-groups/`;

const updateContactGroup = async (id, groupData, token) => {
	try {
		const response = await axios.put(`${API_URL}${id}`, groupData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			timeout: 5000,
		});

		if (response.status < 200 || response.status >= 300) {
			throw new Error(
				`Server responded with status code ${response.status}`
			);
		}

		return response.data;
	} catch (error) {
		console.error('Error updating contact group:', error);

		if (error.response) {
			throw new Error(
				`Error: ${
					error.response.data.message || error.response.statusText
				}`
			);
		} else if (error.request) {
			throw new Error('No response received from the server.');
		} else {
			throw new Error(`Request error: ${error.message}`);
		}
	}
};

const updateContactGroupService = { updateContactGroup };

export default updateContactGroupService;
