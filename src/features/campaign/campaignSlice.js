import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	campaigns: [],
	status: 'idle',
	error: null,
};

const campaignSlice = createSlice({
	name: 'campaign',
	initialState,
	reducers: {
		resetCampaignState: (state) => {
			state.status = 'idle';
			state.campaigns = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase('campaign/createCampaign/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('campaign/createCampaign/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.campaigns.push(action.payload);
			})
			.addCase('campaign/createCampaign/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			})
			.addCase('campaign/fetchCampaigns/pending', (state) => {
				state.status = 'loading';
			})
			.addCase('campaign/fetchCampaigns/fulfilled', (state, action) => {
				state.status = 'succeeded';
				state.campaigns = action.payload;
			})
			.addCase('campaign/fetchCampaigns/rejected', (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const { resetCampaignState } = campaignSlice.actions;
export default campaignSlice.reducer;
