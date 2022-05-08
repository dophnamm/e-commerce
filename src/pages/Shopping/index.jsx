import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { Button } from '@mui/material';

function ShoppingPage(props) {
	return (
		<div className='container'>
			<div className='shopping__container'>
				<h1>Shopping Now</h1>

				<div className='shopping__hero'>
					<img
						src='https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						alt='hero'
					/>

					<Link to='products' className='shopping__button-start'>
						<Button variant='contained' size='large'>
							Get started
						</Button>
					</Link>

					<div className='shopping__overlay'></div>
				</div>
			</div>
		</div>
	);
}

ShoppingPage.propTypes = {};

export default ShoppingPage;
