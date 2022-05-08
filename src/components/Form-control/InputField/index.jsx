import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
};

function InputField(props) {
	const { form, name, label, type, disabled, size } = props;
	const { formState } = form;

	const handleError = formState.errors[name];

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field }) => {
				return (
					<TextField
						{...field}
						fullWidth
						margin='normal'
						label={label}
						disabled={disabled}
						error={!!handleError}
						helperText={formState.errors[name]?.message}
						type={type}
						size={!size ? 'large' : size}
					/>
				);
			}}
		/>
	);
}

export default InputField;
