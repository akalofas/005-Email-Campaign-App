import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchCampaignsService from '../../../services/campaign/fetchCampaignsService';

export const fetchCampaigns = createAsyncThunk(
	'campaign/fetchCampaigns',
	async (_, thunkAPI) => {
		try {
			return await fetchCampaignsService();
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);