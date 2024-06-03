import { createAsyncThunk } from '@reduxjs/toolkit';
import logout from '../../../services/users/logout';

export const logoutUser = createAsyncThunk(
	'user/logoutUser',
	async (_, thunkAPI) => {
		try {
			await logout();
			return true;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);