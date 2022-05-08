import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import handleConvertCurrency from 'util/HandleConvertCurrency/index';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import './style.scss';

Pay.propTypes = {};

function Pay(props) {
	const { enqueueSnackbar } = useSnackbar();
	const { listProduct } = useSelector((state) => state.cart);

	const totalPriceCurrent = listProduct.reduce((prev, curr) => {
		const { originalPrice, salePrice, promotionPercent, count } = curr;
		const price = promotionPercent > 0 ? salePrice : originalPrice;

		return price * count + prev;
	}, 0);

	function handleClickCheckout() {
		const counter = listProduct.find((item) => item.count === 0);
		if (counter) {
			return enqueueSnackbar(
				`Sản phẩm ${counter.name} hiện tại chưa có số lượng vui lòng nhập số lượng`,
				{ variant: 'error' }
			);
		}
	}

	return (
		<Box gridColumn={12} className='pay'>
			<Paper>
				<Grid container p={2} className='pay__price-provisional'>
					<Grid item md={6}>
						<Typography variant='subtitle1'>Tạm tính</Typography>
					</Grid>
					<Grid item md={6}>
						<Typography
							variant='subtitle1'
							textAlign='right'
							fontWeight='bold'
							fontSize='18px'
						>
							{handleConvertCurrency(totalPriceCurrent)}
						</Typography>
					</Grid>
				</Grid>

				<Grid container p={2}>
					<Grid item md={6}>
						<Typography variant='subtitle1'>Thành tiền</Typography>
					</Grid>
					<Grid item md={6}>
						<Typography
							variant='subtitle1'
							textAlign='right'
							fontWeight='bold'
							fontSize='22px'
							className='pay__price'
						>
							{handleConvertCurrency(totalPriceCurrent)}
						</Typography>
					</Grid>
					{totalPriceCurrent > 0 && (
						<Typography fontSize='12px' textAlign='right' flex={1}>
							(Đã bao gồm VAT nếu có)
						</Typography>
					)}
				</Grid>
			</Paper>

			<Button
				disabled={totalPriceCurrent === 0}
				onClick={() => handleClickCheckout()}
				variant='contained'
				fullWidth
				className='pay__button'
			>
				Tiến hành đặt hàng
			</Button>
		</Box>
	);
}

export default Pay;
