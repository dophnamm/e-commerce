import React from 'react';
import { Box, Skeleton } from '@mui/material';

function SkeletonFilter() {
	return (
		<Box>
			{Array.from({ length: 6 }, (_, item) => item).map((item) => (
				<Skeleton variant='text' key={item} />
			))}
			<Skeleton variant='rectangular' height={48} />
		</Box>
	);
}

export default SkeletonFilter;
