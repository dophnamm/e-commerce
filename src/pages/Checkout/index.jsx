import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import NoData from 'pages/Shopping/components/ProductFilters/components/NoData';
import React from 'react';
import { useSelector } from 'react-redux';
import ListItemCheckout from './components/ListItemCheckout';
import Pay from './components/Pay';
import ButtonBackHome from 'components/ButtonBackHome';

function CheckoutPage() {
	const { listProduct } = useSelector((state) => state.cart);

	const totalProduct = listProduct.reduce((prev, curr) => {
		return curr.count + prev;
	}, 0);

	return (
		<>
			<Box mt='50px'>
				<Container maxWidth='xl'>
					<ButtonBackHome />

					<Typography>Giỏ hàng : ({totalProduct} sản phẩm)</Typography>

					<Grid container spacing={1} mt={1}>
						<Grid item md={9} lg={9}>
							<Paper>
								{listProduct.length > 0 ? (
									<ListItemCheckout
										listProduct={listProduct}
									/>
								) : (
									<NoData />
								)}
							</Paper>
						</Grid>

						<Grid item md={3} lg={3}>
							<Pay />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}

export default CheckoutPage;
