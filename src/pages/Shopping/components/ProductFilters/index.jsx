import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import FilterByCategories from './components/FilterByCategories';
import FilterByPrice from './components/FilterByPrice';
import FilterByService from './components/FilterByService';

ProductFilters.propTypes = {
	onChange: PropTypes.func,
	filter: PropTypes.object.isRequired,
};

ProductFilters.defaultProps = {
	filter: {},
};

function ProductFilters({ filter, onChange, clearFilter }) {
	function handleSelectCategory(categoryId) {
		if (!onChange) return;
		const newFilter = {
			'category.id': categoryId,
		};
		onChange(newFilter);
	}

	function handleByPrice(prices) {
		if (onChange) onChange(prices);
	}

	function handleByService(service) {
		if (onChange) onChange(service);
	}

	function handleClearFilter() {
		if (!clearFilter) return;

		const newFilter = { ...filter };

		if (newFilter['category.id']) {
			delete newFilter['category.id'];
			const classActive = document.querySelector('.filter__category.active');
			classActive?.classList?.remove('active');
		}
		if (newFilter.salePrice_gte && newFilter.salePrice_lte) {
			delete newFilter.salePrice_gte;
			delete newFilter.salePrice_lte;
		}

		clearFilter(newFilter);
	}

	return (
		<Box>
			<FilterByCategories onChange={handleSelectCategory} />

			<FilterByPrice onChange={handleByPrice} />

			<Button
				variant='outlined'
				fullWidth
				onClick={() => handleClearFilter()}
				className='filter__clear-all'
				disabled={
					filter['category.id'] || filter.salePrice_gte || filter.salePrice_lte
						? false
						: true
				}
			>
				Xóa bộ lọc
			</Button>

			<FilterByService filter={filter} onChange={handleByService} />
		</Box>
	);
}

export default ProductFilters;
