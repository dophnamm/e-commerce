import { Box, Container, Grid, Paper, Skeleton } from '@mui/material';
import productsApi from 'api/productsApi';
import ButtonBackHome from 'components/ButtonBackHome';
import SkeletonFilter from 'components/Skeleton';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductMenu from '../ProductMenu';
import DetailInformation from './components/DetailInformation';
import DetailThumbnail from './components/DetailThumbnail';
import './style.scss';

function ProductDetail() {
	const params = useParams();
	const { productId } = params;
	const [detail, setDetail] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const response = await productsApi.getById(productId);
				setDetail(response);
				setLoading(false);
			} catch (error) {
				console.log(`Get data by ${productId} failure or not found`, error);
			}
		})();
	}, []);

	return (
		<Box className='detail__container' pb={3}>
			<Container maxWidth='xl'>
				<ButtonBackHome />
				<Paper>
					<Grid container>
						<Grid item md={4} lg={3} p={1} className='detail__left'>
							{loading ? (
								<Skeleton
									variant='rectangular'
									width={210}
									height={118}
								/>
							) : (
								<DetailThumbnail
									thumbnail={detail.thumbnail}
									nameAlt={detail.name}
								/>
							)}
						</Grid>

						<Grid item md={8} lg={9} p={1} className='detail__right'>
							{loading ? (
								<SkeletonFilter />
							) : (
								<DetailInformation detail={detail} />
							)}
						</Grid>
					</Grid>

					{!loading && <ProductMenu description={detail.description} />}
				</Paper>
			</Container>
		</Box>
	);
}

export default ProductDetail;
