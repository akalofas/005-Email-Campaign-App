import { createAsyncThunk } from '@reduxjs/toolkit';
import { verifyEmailService } from '../../../services/users/verifyEmailService';

export const verifyEmail = createAsyncThunk(
	'user/verifyEmail',
	async (token, thunkAPI) => {
		try {
			return await verifyEmailService(token);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response
					? error.response.data
					: { message: 'Something went wrong' }
			);
		}
	}
);
