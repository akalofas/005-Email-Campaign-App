import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTemplatesService from '../../../services/template/fetchTemplatesService';

export const fetchTemplates = createAsyncThunk(
	'template/fetchTemplates',
	async (_, thunkAPI) => {
		try {
			return await fetchTemplatesService();
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
