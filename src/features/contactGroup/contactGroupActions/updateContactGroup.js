import { createAsyncThunk } from '@reduxjs/toolkit';
import updateContactGroupService from '../../../services/contactGroup/updateContactGroupService';

export const updateContactGroup = createAsyncThunk(
	'contactGroup/updateContactGroup',
	async ({ id, groupData }, thunkAPI) => {
		try {
			return await updateContactGroupService(id, groupData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
