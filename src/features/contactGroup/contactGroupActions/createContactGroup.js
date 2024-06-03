import { createAsyncThunk } from '@reduxjs/toolkit';
import createContactGroupService from '../../../services/contactGroup/createContactGroupService';

export const createContactGroup = createAsyncThunk(
	'contactGroup/createContactGroup',
	async (groupData, thunkAPI) => {
		try {
			return await createContactGroupService(groupData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
