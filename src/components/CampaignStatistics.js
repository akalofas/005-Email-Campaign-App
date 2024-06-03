import React from 'react';
import styles from '../styles/CampaignStatistics.module.css';

const CampaignStatistics = ({ statistics, status, error }) => {
	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'failed') {
		return <p>Error: {error}</p>;
	}

	return (
		<div className={styles.statistics}>
			<h3>Campaign Statistics</h3>
			<p>Sent: {statistics.sent}</p>
			<p>Opened: {statistics.opened}</p>
			<p>Clicked: {statistics.clicked}</p>
			<p>Bounced: {statistics.bounced}</p>
			<p>Not Opened: {statistics.notOpened}</p>
		</div>
	);
};

export default CampaignStatistics;
