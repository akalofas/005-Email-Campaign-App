import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchContactGroupsService from '../../../services/contactGroup/fetchContactGroupsService';

export const fetchContactGroups = createAsyncThunk(
	'contactGroup/fetchContactGroups',
	async (_, thunkAPI) => {
		try {
			return await fetchContactGroupsService();
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
