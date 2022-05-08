import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, Stack } from '@mui/material';

FilterViewer.propTypes = {
	filter: PropTypes.object.isRequired,
	onChange: PropTypes.func,
};

function FilterViewer({ filter = {}, onChange = null }) {
	const LIST_FILTER = [
		{
			id: 1,
			label: 'Miễn phí giao hàng',
			isVisible: (filters) => filters.isFreeShip,
			onRemove: (filters) => handleOnRemove(filters),
		},
		{
			id: 2,
			label: 'Giảm giá',
			isVisible: (filters) => filters.isPromotion,
			onRemove: (filters) => handleOnRemove(filters),
		},
	];

	function handleOnRemove(filters) {
		const newFilter = { ...filters };

		if (newFilter.isFreeShip) {
			delete newFilter.isFreeShip;
			return newFilter;
		}

		if (newFilter.isPromotion) {
			delete newFilter.isPromotion;
			return newFilter;
		}
	}

	function handleDeleteFilter(item) {
		if (!onChange) return;
		const newFilter = item.onRemove(filter);
		onChange(newFilter);
	}

	const visibleFilter = useMemo(() => {
		return LIST_FILTER.filter((x) => x.isVisible(filter));
	}, [filter]);

	return (
		<Box p={1}>
			<Stack direction='row' spacing={1}>
				{visibleFilter?.map((item) => {
					return (
						<Chip
							key={item.id}
							label={item.label}
							color='primary'
							onDelete={() => handleDeleteFilter(item)}
						/>
					);
				})}
			</Stack>
		</Box>
	);
}

export default FilterViewer;
