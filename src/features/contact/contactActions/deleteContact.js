import { createAsyncThunk } from '@reduxjs/toolkit';
import deleteContactService from '../../../services/contact/deleteContactService';

export const deleteContact = createAsyncThunk(
	'contact/deleteContact',
	async (id, thunkAPI) => {
		try {
			await deleteContactService(id);
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
