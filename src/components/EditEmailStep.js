import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from '../styles/EditEmailStep.module.css';

const EditEmailStep = ({ emailContent, onContentChange, onSubmit, onBack }) => {
	return (
		<div>
			<h3>Edit Email Content</h3>
			<ReactQuill
				value={emailContent}
				onChange={onContentChange}
				className={styles.editor}
			/>
			<button
				onClick={onBack}
				className={styles.button}
			>
				Back
			</button>
			<button
				onClick={onSubmit}
				className={styles.button}
			>
				Submit
			</button>
		</div>
	);
};

export default EditEmailStep;
