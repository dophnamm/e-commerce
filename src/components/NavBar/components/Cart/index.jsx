import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './style.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CartNavBar(props) {
	const navigate = useNavigate();
	const { listProduct } = useSelector((state) => state.cart);

	const totalProduct = listProduct.reduce((prev, curr) => {
		return curr.count + prev;
	}, 0);

	return (
		<IconButton aria-label='delete' size='large' className='cart' onClick={() => navigate('/checkout')}>
			<span className='cart__item'>{totalProduct}</span>
			<ShoppingBagOutlinedIcon fontSize='inherit' />
		</IconButton>
	);
}

CartNavBar.propTypes = {};

export default CartNavBar;
