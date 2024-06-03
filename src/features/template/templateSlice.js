import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	templates: [],
	status: 'idle',
	error: null,
};

const templateSlice = createSlice({
	name: 'template',
	initialState,
	reducers: {
		resetTemplateState: (state) => {
			state.status = 'idle';
			state.templates = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase('template/createTemplate/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('template/createTemplate/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.templates.push(action.payload);
			})
			.addCase('template/createTemplate/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase('template/fetchTemplates/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('template/fetchTemplates/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.templates = action.payload;
			})
			.addCase('template/fetchTemplates/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const { resetTemplateState } = templateSlice.actions;
export default templateSlice.reducer;
