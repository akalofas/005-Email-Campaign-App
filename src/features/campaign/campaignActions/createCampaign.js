import { createAsyncThunk } from '@reduxjs/toolkit';
import createCampaignService from '../../../services/campaign/createCampaignService';

export const createCampaign = createAsyncThunk(
	'campaign/createCampaign',
	async (campaignData, thunkAPI) => {
		try {
			return await createCampaignService(campaignData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);