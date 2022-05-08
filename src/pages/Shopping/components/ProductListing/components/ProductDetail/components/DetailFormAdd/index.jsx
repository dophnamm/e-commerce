import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ModalLogin from '../ModalLogin';
import { addProductToCart } from 'features/Cart/CartSlice';
import InputQuantity from 'components/Form-control/InputQuantity';

FormAddProduct.propTypes = {
	product: PropTypes.object.isRequired,
};

function FormAddProduct({ product }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state);
	const { currentUser } = user;

	const [visible, setVisible] = useState(false);
	const [count, setCount] = useState(1);

	function handleGetCount(newCount) {
		setCount(newCount);
	}

	function handleClickBuy(dataProduct) {
		if (!currentUser.id) setVisible(true);

		const result = {
			id: dataProduct.id,
			count,
			thumbnail: dataProduct.thumbnail,
			originalPrice: dataProduct.originalPrice,
			salePrice: dataProduct.salePrice,
			promotionPercent: dataProduct.promotionPercent,
			name: dataProduct.name,
		};

		const action = addProductToCart(result);
		dispatch(action);
	}

	return (
		<>
			<Box className='form__add'>
				<Typography mb={1}>Số lượng</Typography>

				<InputQuantity handleGetCount={handleGetCount} />

				<Button
					disabled={count === 0}
					className='form__button-add'
					size='large'
					onClick={() => handleClickBuy(product)}
				>
					Chọn Mua
				</Button>
			</Box>

			<ModalLogin visible={visible} setVisible={setVisible} currentUser={currentUser} />
		</>
	);
}

export default FormAddProduct;
