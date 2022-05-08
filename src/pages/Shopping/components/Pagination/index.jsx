import { Pagination, Stack } from '@mui/material';
import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

PaginationProductsPage.propTypes = {
	onChange: PropTypes.func,
	pagination: PropTypes.object.isRequired,
};

PaginationProductsPage.defaultProps = {
	pagination: {},
};

function PaginationProductsPage({ onChange, pagination }) {
	function handleChangePage(page) {
		if (!onChange) return;
		onChange(page);
	}

	return (
		<Stack direction='row' alignItems='center' spacing={2} className='products__pagination'>
			<Pagination
				count={Math.ceil(pagination.total / pagination.limit) || 1}
				variant='outlined'
				shape='rounded'
				onChange={(_, page) => handleChangePage(page)}
				page={pagination?.page || 1}
			/>
		</Stack>
	);
}

export default PaginationProductsPage;
