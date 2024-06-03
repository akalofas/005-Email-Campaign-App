import { createAsyncThunk } from '@reduxjs/toolkit';
import createTemplateService from '../../../services/template/createTemplateService';

export const createTemplate = createAsyncThunk(
	'template/createTemplate',
	async (templateData, thunkAPI) => {
		try {
			return await createTemplateService(templateData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);