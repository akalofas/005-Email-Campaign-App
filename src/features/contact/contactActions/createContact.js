import { createAsyncThunk } from '@reduxjs/toolkit';
import createContactService from '../../../services/contact/createContactService';

export const createContact = createAsyncThunk(
	'contact/createContact',
	async (contactData, thunkAPI) => {
		try {
			return await createContactService(contactData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
