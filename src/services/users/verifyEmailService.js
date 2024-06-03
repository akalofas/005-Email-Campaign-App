import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/users/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/users/`;

const verifyEmailService = async (token) => {
	try {
		const response = await axios.get(
			`${API_URL}verify-email?token=${token}`,
			{
				timeout: 5000,
			}
		);

		if (response.status < 200 || response.status >= 300) {
			throw new Error(
				`Server responded with status code ${response.status}`
			);
		}

		return response.data;
	} catch (error) {
		console.error('Error verifying email:', error);

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

export default { verifyEmailService };
