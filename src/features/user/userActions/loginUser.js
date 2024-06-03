import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../services/users/login';

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (userData, thunkAPI) => {
		try {
			return await login(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);