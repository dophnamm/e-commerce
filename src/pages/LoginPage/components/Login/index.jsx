import React from 'react';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { productId } = useParams();
	const { enqueueSnackbar } = useSnackbar();

	async function onSubmit(values) {
		try {
			const action = login(values);
			const resultAction = await dispatch(action);
			unwrapResult(resultAction);
			if (!productId) navigate('/shopping');
		} catch (error) {
			enqueueSnackbar(error.message, { variant: 'error' });
			console.log('Login failure', error);
		}
	}

	return <LoginForm onSubmit={onSubmit} />;
}

export default Login;
