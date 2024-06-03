import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userActions/logoutUser';
import Dashboard from '../components/Dashboard';

const DashboardContainer = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<Dashboard
			user={user}
			onLogout={handleLogout}
		/>
	);
};

export default DashboardContainer;
