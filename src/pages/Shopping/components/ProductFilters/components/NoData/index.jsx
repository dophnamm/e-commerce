import { Box, Typography } from '@mui/material';
import React from 'react';

function NoData() {
	return (
		<Box minHeight={300} p={2}>
			<Typography variant='h6' textAlign='center'>
				{' '}
				Không có dữ liệu{' '}
			</Typography>
		</Box>
	);
}

export default NoData;
