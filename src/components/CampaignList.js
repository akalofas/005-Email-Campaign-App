import React from 'react';
import styles from '../styles/CampaignList.module.css';

const CampaignList = ({ campaigns, status, error, onDelete, onDuplicate }) => {
	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'failed') {
		return <p>Error: {error}</p>;
	}

	return (
		<div className={styles.list}>
			{campaigns.map((campaign) => (
				<div
					key={campaign.id}
					className={styles.campaign}
				>
					<h3>{campaign.name}</h3>
					<p>{campaign.subject}</p>
					<p>{campaign.content}</p>
					<button
						onClick={() => onDelete(campaign.id)}
						className={styles.button}
					>
						Delete
					</button>
					<button
						onClick={() => onDuplicate(campaign.id)}
						className={styles.button}
					>
						Duplicate
					</button>
					<button className={styles.button}>Edit</button>
				</div>
			))}
		</div>
	);
};

export default CampaignList;
