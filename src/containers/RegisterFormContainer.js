import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userActions/registerUser';
import RegisterForm from '../components/RegisterForm';

const RegisterFormContainer = () => {
	const dispatch = useDispatch();

	const handleRegister = (values) => {
		dispatch(registerUser(values));
	};

	return <RegisterForm onSubmit={handleRegister} />;
};

export default RegisterFormContainer;
