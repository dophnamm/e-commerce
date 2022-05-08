import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

SkeletonProductList.propTypes = {
	length: PropTypes.number.isRequired,
};

SkeletonProductList.defaultProps = {
	length: 12,
};

function SkeletonProductList({ length }) {
	return (
		<Box>
			<Grid container>
				{Array.from(new Array(length)).map((_, index) => {
					return (
						<Grid key={index} item xs={12} sm={6} md={4} lg={3}>
							<Box p={1}>
								<Skeleton
									variant='rectangular'
									width='100%'
									height={246}
								/>
								<Skeleton />
								<Skeleton width='60%' />
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}

export default SkeletonProductList;
