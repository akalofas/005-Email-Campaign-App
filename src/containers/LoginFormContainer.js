import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userActions/loginUser';
import LoginForm from '../components/LoginForm';

const LoginFormContainer = () => {
	const dispatch = useDispatch();

	const handleLogin = (values) => {
		dispatch(loginUser(values));
	};

	return <LoginForm onSubmit={handleLogin} />;
};

export default LoginFormContainer;
