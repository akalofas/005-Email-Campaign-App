import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	contacts: [],
	status: 'idle',
	error: null,
};

const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		resetContactState: (state) => {
			state.status = 'idle';
			state.contacts = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase('contact/createContact/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('contact/createContact/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.contacts.push(action.payload);
			})
			.addCase('contact/createContact/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase('contact/fetchContacts/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('contact/fetchContacts/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.contacts = action.payload;
			})
			.addCase('contact/fetchContacts/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase('contact/updateContact/fulfilled', (state, action) => {
				const index = state.contacts.findIndex(
					(contact) => contact.id === action.payload.id
				);
				state.contacts[index] = action.payload;
			})
			.addCase('contact/deleteContact/fulfilled', (state, action) => {
				state.contacts = state.contacts.filter(
					(contact) => contact.id !== action.payload
				);
			});
	},
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
