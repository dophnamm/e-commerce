import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

FilterByService.propTypes = {
	onChange: PropTypes.func,
};

const labels = [
	{ id: 1, label: 'Miễn phí giao hàng', name: 'isFreeShip' },
	{ id: 2, label: 'Giảm giá', name: 'isPromotion' },
];

function FilterByService({ filter, onChange }) {
	function handleChecked(event) {
		if (!onChange) return;
		const { name, checked } = event.target;
		onChange({ [name]: checked });
	}

	return (
		<Box>
			<Typography fontWeight='bold' mt='16px' mb='12px' ml='4px'>
				{' '}
				Dịch vụ{' '}
			</Typography>

			<FormGroup>
				{labels.map((item) => (
					<FormControlLabel
						key={item.id}
						control={
							<Checkbox
								name={item.name}
								checked={Boolean(filter[item.name])}
								onChange={(event) => handleChecked(event)}
								size='small'
								disabled={Boolean(filter[item.name])}
							/>
						}
						label={item.label}
					/>
				))}
			</FormGroup>
		</Box>
	);
}

export default FilterByService;
