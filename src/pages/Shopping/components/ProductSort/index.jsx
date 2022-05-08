import { Tab, Tabs } from '@mui/material';
import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

ProductSort.propTypes = {
	currentSort: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};

ProductSort.defaultProps = {
	currentSort: '',
};

function ProductSort({ currentSort, onChange }) {
	function handleChangeSort(value) {
		if (!onChange) return;
		onChange(value);
	}

	return (
		<Tabs
			value={currentSort}
			onChange={(_, value) => handleChangeSort(value)}
			aria-label='basic tabs example'
			className='product__sort'
		>
			<Tab label='Mới nhất' value='salePrice' />
			<Tab label='Giá thấp' value='salePrice:ASC' />
			<Tab label='Giá cao' value='salePrice:DESC' />
		</Tabs>
	);
}

export default ProductSort;
