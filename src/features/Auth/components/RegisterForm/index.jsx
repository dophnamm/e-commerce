import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LinearProgress } from '@mui/material';
import InputField from 'components/Form-control/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

function RegisterForm({ onSubmit }) {
	const schema = yup.object().shape({
		fullName: yup.string().required('Please enter your full name').min(5, 'Full name is too short'),
		email: yup.string().email('Must be a valid email').required('Please enter your email'),
		password: yup
			.string()
			.required('Please enter your password')
			.min(6, 'Password is too short, make sure  least 6 characters'),
		confirmPassword: yup
			.string()
			.required('Please enter your confirm password')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	});

	const form = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(schema),
	});

	async function handleOnSubmit(values) {
		if (!onSubmit) return;

		await onSubmit(values);
	}

	const { isSubmitting } = form.formState;

	return (
		<form onSubmit={form.handleSubmit(handleOnSubmit)}>
			<InputField name='fullName' label='Full Name *' form={form} type='text' />
			<InputField name='email' label='Email *' form={form} type='text' />
			<InputField name='password' label='Password *' form={form} type='password' />
			<InputField name='confirmPassword' label='Confirm Password *' form={form} type='password' />

			{isSubmitting && <LinearProgress />}

			<Button
				disabled={isSubmitting}
				type='submit'
				fullWidth
				variant='contained'
				size='large'
				sx={{ mt: 3, mb: 2 }}
			>
				Create an account
			</Button>
		</form>
	);
}

export default RegisterForm;
