import React from 'react';
import styles from '../styles/ContactList.module.css';

const ContactList = ({ contacts, status, error, onDelete }) => {
	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'failed') {
		return <p>Error: {error}</p>;
	}

	return (
		<div className={styles.list}>
			{contacts.map((contact) => (
				<div
					key={contact.id}
					className={styles.contact}
				>
					<h3>{contact.name}</h3>
					<p>{contact.email}</p>
					<button
						onClick={() => onDelete(contact.id)}
						className={styles.button}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default ContactList;
