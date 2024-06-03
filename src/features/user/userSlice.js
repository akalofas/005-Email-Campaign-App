import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	status: 'idle',
	error: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetUserState: (state) => {
			state.status = 'idle';
			state.user = null;
			state.error = null;
		},
		logoutUser: (state) => {
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase('user/registerUser/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('user/registerUser/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase('user/registerUser/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase('user/loginUser/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('user/loginUser/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase('user/loginUser/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase('user/logoutUser/fulfilled', (state) => {
				state.status = 'idle';
				state.user = null;
			})
			.addCase('user/verifyEmail/fulfilled', (state, action) => {
				state.user.isVerified = true;
			});
	},
});

export const { resetUserState, logoutUser } = userSlice.actions;
export default userSlice.reducer;
