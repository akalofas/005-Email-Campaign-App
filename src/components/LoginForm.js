import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/LoginForm.module.css';

const LoginFormSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required'),
});

const LoginForm = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={LoginFormSchema}
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
						Login
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
