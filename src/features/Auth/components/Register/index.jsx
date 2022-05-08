import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {
	handleClose: PropTypes.func.isRequired,
};

function Register({ handleClose }) {
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();

	async function handleFormSubmit(values) {
		try {
			values.username = values.email;

			const action = register(values);
			const resultAction = await dispatch(action);
			unwrapResult(resultAction);

			handleClose();
			enqueueSnackbar('Create account successfully', { variant: 'success' });
		} catch (error) {
			enqueueSnackbar(error.message, { variant: 'error' });
			console.log('Failure register', error);
		}
	}

	return (
		<div>
			<RegisterForm onSubmit={handleFormSubmit} />
		</div>
	);
}

export default Register;
