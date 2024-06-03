import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterFormContainer from './containers/RegisterFormContainer';
import LoginFormContainer from './containers/LoginFormContainer';
import DashboardContainer from './containers/DashboardContainer';
import CreateCampaignModalContainer from './containers/CreateCampaignModalContainer';
import CampaignListContainer from './containers/CampaignListContainer';
import CampaignStatisticsContainer from './containers/CampaignStatisticsContainer';
import Home from './pages/Home';

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route
				path='/register'
				element={<RegisterFormContainer />}
			/>
			<Route
				path='/login'
				element={<LoginFormContainer />}
			/>
			<Route
				path='/dashboard'
				element={<DashboardContainer />}
			/>
			<Route
				path='/create-campaign'
				element={<CreateCampaignModalContainer />}
			/>
			<Route
				path='/campaigns'
				element={<CampaignListContainer />}
			/>
			<Route
				path='/campaigns/:campaignId/statistics'
				element={<CampaignStatisticsContainer />}
			/>
		</Routes>
	</Router>
);

export default App;
