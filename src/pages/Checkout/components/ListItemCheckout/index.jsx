import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ItemCheckout from '../ItemCheckout';

ListItemCheckout.propTypes = {
	listProduct: PropTypes.array.isRequired,
};

ListItemCheckout.defaultProps = {
	listProduct: [],
};

function ListItemCheckout({ listProduct }) {
	return (
		<Box p={2} pl={3} pr={3} minHeight={300}>
			{listProduct.map((item) => (
				<ItemCheckout key={item.id} item={item} />
			))}
		</Box>
	);
}

export default ListItemCheckout;
