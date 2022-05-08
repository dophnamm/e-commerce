import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import handleConvertCurrency from 'util/HandleConvertCurrency';
import handleThumbnailError from 'util/HandleThumbnailError';
import './style.scss';

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

Product.defaultProps = {
	product: {},
};

function Product({ product }) {
	const navigate = useNavigate();
	const { id, name, originalPrice, promotionPercent, thumbnail } = product;

	function handleClickDetail(productId) {
		navigate(`/shopping/products/${productId}`);
	}

	return (
		<Grid item xs={12} sm={6} md={4} lg={3} className='product' onClick={() => handleClickDetail(id)}>
			<Box p={1}>
				<img src={handleThumbnailError(thumbnail)} alt={name} className='product__thumbnail' />

				<Typography variant='h6' component='div' fontWeight='bold' className='product__name'>
					{name}
				</Typography>

				<Typography fontWeight='bold' className='product__price'>
					{handleConvertCurrency(originalPrice)}
					<span>{promotionPercent > 0 ? `-${promotionPercent}%` : ''}</span>
				</Typography>
			</Box>
		</Grid>
	);
}

export default Product;
