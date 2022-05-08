import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import handleThumbnailError from 'util/HandleThumbnailError';
import handleConvertCurrency from 'util/HandleConvertCurrency';
import './style.scss';
import InputQuantity from 'components/Form-control/InputQuantity';
import { useDispatch } from 'react-redux';
import { additionalItem, deleteItem } from 'features/Cart/CartSlice';

ItemCheckout.propTypes = {
	item: PropTypes.object.isRequired,
};

ItemCheckout.defaultProps = {
	item: {},
};

function ItemCheckout({ item }) {
	const dispatch = useDispatch();
	const { id, name, thumbnail, originalPrice, salePrice, promotionPercent, count } = item;

	const salePriceFormat = handleConvertCurrency(salePrice);
	const originPriceFormat = handleConvertCurrency(originalPrice);

	function handleAdditionalItem(newCount) {
		const action = additionalItem({ id, count: newCount });
		dispatch(action);
	}

	function handleDelete(id) {
		const action = deleteItem(id);
		dispatch(action);
	}

	return (
		<Grid container className='item__checkout'>
			<Grid item md={2} lg={2} className='item__left'>
				<img src={handleThumbnailError(thumbnail)} alt={name} className='item__img' />
			</Grid>

			<Grid item md={10} lg={10} pl={3} pt={2} className='item__right'>
				<Grid container>
					<Grid item md={7} lg={7} className='item__inner-left'>
						<Typography>{name}</Typography>

						<Typography
							onClick={() => handleDelete(id)}
							variant='text'
							className='item__button-delete'
						>
							Xóa
						</Typography>
					</Grid>

					<Grid item md={3} lg={3} textAlign='right' className='item__inner-center'>
						{promotionPercent > 0 ? (
							<>
								<Typography
									variant='h6'
									fontSize='18px'
									fontWeight='bold'
								>
									{salePriceFormat}
								</Typography>

								<p className='item__price'>
									<span>{originPriceFormat}</span>

									<span>{promotionPercent}%</span>
								</p>
							</>
						) : (
							<Typography variant='h6' fontSize='18px' fontWeight='bold'>
								{originPriceFormat}
							</Typography>
						)}
					</Grid>

					<Grid item md={2} lg={2} textAlign='right' className='item__inner-right'>
						<InputQuantity
							currentCount={count}
							additionalCount={handleAdditionalItem}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ItemCheckout;
