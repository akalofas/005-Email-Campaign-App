import { createAsyncThunk } from '@reduxjs/toolkit';
import deleteContactGroupService from '../../../services/contactGroup/deleteContactGroupService';

export const deleteContactGroup = createAsyncThunk(
	'contactGroup/deleteContactGroup',
	async (id, thunkAPI) => {
		try {
			await deleteContactGroupService(id);
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
