import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LinearProgress } from '@mui/material';
import InputField from 'components/Form-control/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

function LoginForm({ onSubmit }) {
	const schema = yup.object().shape({
		identifier: yup.string().required('Please enter your email').email('Must be a valid email'),
		password: yup.string().required('Please enter your password'),
	});

	const form = useForm({
		defaultValues: {
			identifier: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	async function handleSubmitForm(values) {
		await onSubmit(values);
	}

	const { isSubmitting } = form.formState;

	return (
		<form onSubmit={form.handleSubmit(handleSubmitForm)}>
			<InputField name='identifier' label='Email *' type='text' form={form} />
			<InputField name='password' label='Password *' type='password' form={form} />

			{isSubmitting && <LinearProgress />}

			<Button
				disabled={isSubmitting}
				type='submit'
				fullWidth
				size='large'
				variant='contained'
				sx={{ mt: 3, mb: 2 }}
			>
				Sign In
			</Button>
		</form>
	);
}

export default LoginForm;
