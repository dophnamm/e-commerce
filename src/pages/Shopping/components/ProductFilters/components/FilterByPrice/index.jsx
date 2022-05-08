import { Box, Button, Grid, Typography } from '@mui/material';
import InputField from 'components/Form-control/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

FilterByPrice.propTypes = {
	onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
	const schema = yup.object().shape({
		salePrice_gte: yup.string().required('Please enter full field'),
		salePrice_lte: yup.string().required('Please enter full field'),
	});

	const form = useForm({
		defaultValues: {
			salePrice_gte: '0',
			salePrice_lte: '0',
		},
		resolver: yupResolver(schema),
	});

	function handleSubmitFilterPrice(values) {
		if (!onChange) return;
		onChange(values);
	}

	return (
		<Box mt='12px'>
			<Typography fontWeight='bold' mb={1} ml='4px'>
				{' '}
				Lọc theo giá{' '}
			</Typography>
			<Box>
				<form onSubmit={form.handleSubmit(handleSubmitFilterPrice)}>
					<Grid container spacing={1}>
						<Grid item md={6}>
							<InputField
								name='salePrice_gte'
								label='From'
								form={form}
								type='number'
								size='small'
							/>
						</Grid>

						<Grid item md={6}>
							<InputField
								name='salePrice_lte'
								label='To'
								form={form}
								type='number'
								size='small'
							/>
						</Grid>
					</Grid>

					<Button type='submit' variant='outlined' fullWidth>
						Áp dụng
					</Button>
				</form>
			</Box>
		</Box>
	);
}

export default FilterByPrice;
