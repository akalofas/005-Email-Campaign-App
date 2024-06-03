import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import templateReducer from '../features/template/templateSlice';
import campaignReducer from '../features/campaign/campaignSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		template: templateReducer,
		campaign: campaignReducer,
	},
});
