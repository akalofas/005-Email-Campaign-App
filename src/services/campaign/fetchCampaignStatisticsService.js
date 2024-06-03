import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/campaigns/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/campaigns/`;

const fetchCampaignStatisticsService = async (campaignId, token) => {
	try {
		const response = await axios.get(`${API_URL}${campaignId}/statistics`, {
			headers: {
				Authorization: `Bearer ${token}`,
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
		console.error('Error fetching campaign statistics:', error);

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

export default { fetchCampaignStatisticsService };
