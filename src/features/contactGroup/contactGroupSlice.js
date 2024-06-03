import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	contactGroups: [],
	status: 'idle',
	error: null,
};

const contactGroupSlice = createSlice({
	name: 'contactGroup',
	initialState,
	reducers: {
		resetContactGroupState: (state) => {
			state.status = 'idle';
			state.contactGroups = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase('contactGroup/createContactGroup/pending', (state) => {
				state.status = 'loading';
			})
			.addCase(
				'contactGroup/createContactGroup/fulfilled',
				(state, action) => {
					state.status = 'succeeded';
					state.contactGroups.push(action.payload);
				}
			)
			.addCase(
				'contactGroup/createContactGroup/rejected',
				(state, action) => {
					state.status = 'failed';
					state.error = action.payload;
				}
			)
			.addCase('contactGroup/fetchContactGroups/pending', (state) => {
				state.status = 'loading';
			})
			.addCase(
				'contactGroup/fetchContactGroups/fulfilled',
				(state, action) => {
					state.status = 'succeeded';
					state.contactGroups = action.payload;
				}
			)
			.addCase(
				'contactGroup/fetchContactGroups/rejected',
				(state, action) => {
					state.status = 'failed';
					state.error = action.payload;
				}
			)
			.addCase(
				'contactGroup/updateContactGroup/fulfilled',
				(state, action) => {
					const index = state.contactGroups.findIndex(
						(group) => group.id === action.payload.id
					);
					state.contactGroups[index] = action.payload;
				}
			)
			.addCase(
				'contactGroup/deleteContactGroup/fulfilled',
				(state, action) => {
					state.contactGroups = state.contactGroups.filter(
						(group) => group.id !== action.payload
					);
				}
			);
	},
});

export const { resetContactGroupState } = contactGroupSlice.actions;
export default contactGroupSlice.reducer;
