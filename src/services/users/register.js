import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/users/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/users/`;

const register = async (userData) => {
	const response = await axios.post(`${API_URL}register`, userData);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

export default { register };
