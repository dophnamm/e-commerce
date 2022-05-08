import { Box, Grid } from '@mui/material';
import NoData from 'pages/Shopping/components/ProductFilters/components/NoData';
import PropTypes from 'prop-types';
import React from 'react';
import Product from '../Product';

ListProduct.propTypes = {
	currentProducts: PropTypes.array.isRequired,
};

ListProduct.defaultProps = {
	currentProducts: [],
};

function ListProduct(props) {
	const { currentProducts } = props;

	return (
		<Box>
			<Grid container>
				{currentProducts &&
					currentProducts.length > 0 &&
					currentProducts.map((product) => {
						return <Product key={product.id} product={product} />;
					})}
			</Grid>
			{currentProducts.length === 0 && <NoData />}
		</Box>
	);
}

export default ListProduct;
