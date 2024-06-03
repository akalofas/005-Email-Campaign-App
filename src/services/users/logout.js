import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/users/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/users/`;

const logout = async () => {
	await axios.post(`${API_URL}logout`, {}, { withCredentials: true });
	localStorage.removeItem('user');
};

export default { logout };
