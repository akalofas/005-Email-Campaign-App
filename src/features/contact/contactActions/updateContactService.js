import { createAsyncThunk } from '@reduxjs/toolkit';
import updateContactService from '../../../services/contact/updateContactService';

export const updateContact = createAsyncThunk(
	'contact/updateContact',
	async ({ id, contactData }, thunkAPI) => {
		try {
			return await updateContactService(id, contactData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
