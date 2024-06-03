import axios from 'axios';

const API_URL =
	process.env.SERVER_PORT === '80' || process.env.SERVER_PORT === '443'
		? `${process.env.SERVER_URL}/api/campaign/`
		: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/campaign/`;

const fetchCampaignStatisticsService = async (campaignId) => {
	const response = await axios.get(`${API_URL}${campaignId}/statistics`);
	return response.data;
};

export default { fetchCampaignStatisticsService };
