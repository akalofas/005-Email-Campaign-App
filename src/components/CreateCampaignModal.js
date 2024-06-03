import React, { useState } from 'react';
import Modal from 'react-modal';
import Stepper from 'react-stepper-horizontal';
import SelectTemplateStepContainer from '../containers/SelectTemplateStepContainer';
import EditEmailStep from './EditEmailStep';
import styles from '../styles/CreateCampaignModal.module.css';

const CreateCampaignModal = ({ isOpen, onClose, contacts, contactGroups }) => {
	const [step, setStep] = useState(0);
	const [campaignName, setCampaignName] = useState('');
	const [selectedTemplate, setSelectedTemplate] = useState(null);
	const [emailContent, setEmailContent] = useState('');
	const [selectedContacts, setSelectedContacts] = useState([]);
	const [selectedContactGroups, setSelectedContactGroups] = useState([]);
	const [scheduleDate, setScheduleDate] = useState('');

	const handleNext = () => setStep(step + 1);
	const handleBack = () => setStep(step - 1);

	const handleCampaignNameChange = (e) => setCampaignName(e.target.value);
	const handleTemplateSelect = (template) => setSelectedTemplate(template);
	const handleEmailContentChange = (content) => setEmailContent(content);

	const handleContactSelect = (e) => {
		const { value, checked } = e.target;
		if (checked) {
			setSelectedContacts([...selectedContacts, value]);
		} else {
			setSelectedContacts(
				selectedContacts.filter((contact) => contact !== value)
			);
		}
	};

	const handleContactGroupSelect = (e) => {
		const { value, checked } = e.target;
		if (checked) {
			setSelectedContactGroups([...selectedContactGroups, value]);
		} else {
			setSelectedContactGroups(
				selectedContactGroups.filter((group) => group !== value)
			);
		}
	};

	const handleScheduleDateChange = (e) => setScheduleDate(e.target.value);

	const handleSubmit = () => {
		console.log({
			campaignName,
			selectedTemplate,
			emailContent,
			selectedContacts,
			selectedContactGroups,
			scheduleDate,
		});
		onClose();
	};

	const steps = [
		{ title: 'Name Campaign' },
		{ title: 'Select Template' },
		{ title: 'Edit Email' },
		{ title: 'Select Contacts' },
		{ title: 'Schedule' },
	];

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className={styles.modal}
			overlayClassName={styles.overlay}
		>
			<h2>Create Campaign</h2>
			<Stepper
				steps={steps}
				activeStep={step}
			/>
			{step === 0 && (
				<div>
					<label>
						Campaign Name:
						<input
							type='text'
							value={campaignName}
							onChange={handleCampaignNameChange}
							className={styles.input}
						/>
					</label>
					<button
						onClick={handleNext}
						className={styles.button}
					>
						Next
					</button>
				</div>
			)}
			{step === 1 && (
				<SelectTemplateStepContainer
					selectedTemplate={selectedTemplate}
					onTemplateSelect={handleTemplateSelect}
					onNext={handleNext}
					onBack={handleBack}
				/>
			)}
			{step === 2 && (
				<EditEmailStep
					emailContent={emailContent}
					onContentChange={handleEmailContentChange}
					onSubmit={handleSubmit}
					onBack={handleBack}
				/>
			)}
			{step === 3 && (
				<div>
					<h3>Select Contacts</h3>
					<div className={styles.contactList}>
						{contacts.map((contact) => (
							<label key={contact.id}>
								<input
									type='checkbox'
									value={contact.id}
									onChange={handleContactSelect}
									className={styles.checkbox}
								/>
								{contact.name} ({contact.email})
							</label>
						))}
					</div>
					<h3>Select Contact Groups</h3>
					<div className={styles.contactList}>
						{contactGroups.map((group) => (
							<label key={group.id}>
								<input
									type='checkbox'
									value={group.id}
									onChange={handleContactGroupSelect}
									className={styles.checkbox}
								/>
								{group.name}
							</label>
						))}
					</div>
					<button
						onClick={handleBack}
						className={styles.button}
					>
						Back
					</button>
					<button
						onClick={handleNext}
						className={styles.button}
					>
						Next
					</button>
				</div>
			)}
			{step === 4 && (
				<div>
					<label>
						Schedule Date:
						<input
							type='datetime-local'
							value={scheduleDate}
							onChange={handleScheduleDateChange}
							className={styles.input}
						/>
					</label>
					<button
						onClick={handleBack}
						className={styles.button}
					>
						Back
					</button>
					<button
						onClick={handleSubmit}
						className={styles.button}
					>
						Submit
					</button>
				</div>
			)}
		</Modal>
	);
};

export default CreateCampaignModal;
