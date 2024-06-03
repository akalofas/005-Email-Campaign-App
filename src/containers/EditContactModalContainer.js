import React, { useState } from 'react';
import EditContactModal from '../components/EditContactModal';

const EditContactModalContainer = ({ contact, isOpen, onClose }) => {
	const [formData, setFormData] = useState(contact);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Updated Contact:', formData);
		onClose();
	};

	return (
		<EditContactModal
			formData={formData}
			isOpen={isOpen}
			onClose={onClose}
			onChange={handleChange}
			onSubmit={handleSubmit}
		/>
	);
};

export default EditContactModalContainer;
