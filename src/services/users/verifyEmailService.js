import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/users/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/users/`;

const verifyEmailService = async (token) => {
	const response = await axios.get(`${API_URL}verify-email?token=${token}`);
	return response.data;
};

export default { verifyEmailService };
