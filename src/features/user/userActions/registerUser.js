import { createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../../services/users/register';

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (userData, thunkAPI) => {
		try {
			return await register(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);

