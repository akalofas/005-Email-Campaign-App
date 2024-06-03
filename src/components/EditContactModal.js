import React from 'react';
import Modal from './Modal';
import styles from '../styles/EditContactModal.module.css';

const EditContactModal = ({
	formData,
	isOpen,
	onClose,
	onChange,
	onSubmit,
}) => {
	if (!isOpen) return null;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<form
				onSubmit={onSubmit}
				className={styles.form}
			>
				<label>
					Name:
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={onChange}
						className={styles.input}
					/>
				</label>
				<label>
					Email:
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={onChange}
						className={styles.input}
					/>
				</label>
				<button
					type='submit'
					className={styles.button}
				>
					Save Changes
				</button>
			</form>
		</Modal>
	);
};

export default EditContactModal;
