import { createAsyncThunk } from '@reduxjs/toolkit';
import deleteCampaignService from '../../../services/campaign/deleteCampaignService';

export const deleteCampaign = createAsyncThunk(
	'campaign/deleteCampaign',
	async (id, thunkAPI) => {
		try {
			await deleteCampaignService(id);
			return id;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
