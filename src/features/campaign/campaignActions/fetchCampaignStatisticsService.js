import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchCampaignStatisticsService from '../../../services/campaign/fetchCampaignStatisticsService';

export const fetchCampaignStatistics = createAsyncThunk(
	'campaign/fetchCampaignStatistics',
	async (campaignId, thunkAPI) => {
		try {
			return await fetchCampaignStatisticsService(campaignId);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
