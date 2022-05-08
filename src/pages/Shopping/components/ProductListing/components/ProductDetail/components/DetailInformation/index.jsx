import { Box, Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import handleConvertCurrency from 'util/HandleConvertCurrency';
import FormAddProduct from '../DetailFormAdd';
import './style.scss';

DetailInformation.propTypes = {
	detail: PropTypes.object.isRequired,
};

function DetailInformation({ detail = {} }) {
	const { name, salePrice, promotionPercent, originalPrice, shortDescription } = detail;
	const salePriceFormat = handleConvertCurrency(salePrice);
	const originPriceFormat = handleConvertCurrency(originalPrice);

	return (
		<Box className='detail'>
			<Typography variant='h5' mb={2}>
				{name}
			</Typography>
			<Typography>{shortDescription}</Typography>

			<Card className='detail__card-price'>
				{promotionPercent > 0 ? (
					<>
						<Typography variant='h4' fontWeight='bold' className='detail__price'>
							{salePriceFormat}

							<span className='detail__origin'>{originPriceFormat}</span>

							<span>-{promotionPercent}%</span>
						</Typography>
					</>
				) : (
					<Typography variant='h4' fontWeight='bold'>
						{originPriceFormat}
					</Typography>
				)}
			</Card>

			<div className='line'></div>

			<FormAddProduct product={detail} />
		</Box>
	);
}

export default DetailInformation;
