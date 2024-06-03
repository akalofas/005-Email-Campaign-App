import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchContactsService from '../../../services/contact/fetchContactsService';

export const fetchContacts = createAsyncThunk(
	'contact/fetchContacts',
	async (_, thunkAPI) => {
		try {
			return await fetchContactsService();
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
