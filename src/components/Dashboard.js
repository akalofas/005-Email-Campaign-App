import React from 'react';
import styles from '../styles/Dashboard.module.css';

const Dashboard = ({ user, onLogout }) => {
	return (
		<div className={styles.dashboard}>
			<h1>Welcome, {user ? user.email : 'Guest'}</h1>
			<button
				onClick={onLogout}
				className={styles.logoutButton}
			>
				Logout
			</button>
			<p>
				This is your dashboard, where you can manage all your email
				campaigns and view their performance.
			</p>
		</div>
	);
};

export default Dashboard;
