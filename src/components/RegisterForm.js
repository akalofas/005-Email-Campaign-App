import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/RegisterForm.module.css';

const RegisterFormSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required'),
});

const RegisterForm = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={RegisterFormSchema}
			onSubmit={(values, { setSubmitting }) => {
				onSubmit(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form className={styles.form}>
					<Field
						name='email'
						type='email'
						placeholder='Email'
						className={styles.input}
					/>
					<Field
						name='password'
						type='password'
						placeholder='Password'
						className={styles.input}
					/>
					<button
						type='submit'
						disabled={isSubmitting}
						className={styles.button}
					>
						Register
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default RegisterForm;
