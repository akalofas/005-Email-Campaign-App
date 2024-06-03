import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplates } from '../features/template/templateActions/fetchTemplates';
import SelectTemplateStep from '../components/SelectTemplateStep';

const SelectTemplateStepContainer = ({
	selectedTemplate,
	onTemplateSelect,
	onNext,
	onBack,
}) => {
	const dispatch = useDispatch();
	const templates = useSelector((state) => state.template.templates);
	const status = useSelector((state) => state.template.status);
	const error = useSelector((state) => state.template.error);

	useEffect(() => {
		dispatch(fetchTemplates());
	}, [dispatch]);

	return (
		<SelectTemplateStep
			templates={templates}
			selectedTemplate={selectedTemplate}
			onTemplateSelect={onTemplateSelect}
			onNext={onNext}
			onBack={onBack}
			status={status}
			error={error}
		/>
	);
};

export default SelectTemplateStepContainer;
