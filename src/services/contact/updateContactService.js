import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/contacts/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/contacts/`;

const updateContactService = async (id, contactData, token) => {
	try {
		const response = await axios.put(`${API_URL}${id}`, contactData, {
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
		console.error('Error updating contact:', error);

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

export default { updateContactService };
