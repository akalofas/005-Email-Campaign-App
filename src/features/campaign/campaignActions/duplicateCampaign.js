import { createAsyncThunk } from '@reduxjs/toolkit';
import duplicateCampaignService from '../../../services/campaign/duplicateCampaignService';

export const duplicateCampaign = createAsyncThunk(
	'campaign/duplicateCampaign',
	async (id, thunkAPI) => {
		try {
			return await duplicateCampaignService(id);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
