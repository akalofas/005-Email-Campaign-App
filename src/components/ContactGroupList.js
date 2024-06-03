import React from 'react';
import styles from '../styles/ContactGroupList.module.css';

const ContactGroupList = ({ contactGroups, status, error, onDelete }) => {
	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'failed') {
		return <p>Error: {error}</p>;
	}

	return (
		<div className={styles.list}>
			{contactGroups.map((group) => (
				<div
					key={group.id}
					className={styles.contactGroup}
				>
					<h3>{group.name}</h3>
					<button
						onClick={() => onDelete(group.id)}
						className={styles.button}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default ContactGroupList;
