import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../features/contact/contactActions/fetchContacts';
import { fetchContactGroups } from '../features/contactGroup/contactGroupActions/fetchContactGroups';
import CreateCampaignModal from '../components/CreateCampaignModal';

const CreateCampaignModalContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isOpen) {
			dispatch(fetchContacts());
			dispatch(fetchContactGroups());
		}
	}, [isOpen, dispatch]);

	const contacts = useSelector((state) => state.contact.contacts);
	const contactGroups = useSelector(
		(state) => state.contactGroup.contactGroups
	);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<button onClick={handleOpen}>Create Campaign</button>
			<CreateCampaignModal
				isOpen={isOpen}
				onClose={handleClose}
				contacts={contacts}
				contactGroups={contactGroups}
			/>
		</>
	);
};

export default CreateCampaignModalContainer;
