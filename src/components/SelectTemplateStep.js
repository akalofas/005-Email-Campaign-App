import React from 'react';
import styles from '../styles/SelectTemplateStep.module.css';

const SelectTemplateStep = ({
	templates,
	selectedTemplate,
	onTemplateSelect,
	onNext,
	onBack,
	status,
	error,
}) => {
	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'failed') {
		return <p>Error: {error}</p>;
	}

	return (
		<div>
			<h3>Select a Template</h3>
			<div className={styles.templateList}>
				{templates.map((template) => (
					<div
						key={template.id}
						className={`${styles.template} ${
							selectedTemplate === template ? styles.selected : ''
						}`}
						onClick={() => onTemplateSelect(template)}
					>
						{template.name}
					</div>
				))}
			</div>
			<button
				onClick={onBack}
				className={styles.button}
			>
				Back
			</button>
			<button
				onClick={onNext}
				className={styles.button}
				disabled={!selectedTemplate}
			>
				Next
			</button>
		</div>
	);
};

export default SelectTemplateStep;
