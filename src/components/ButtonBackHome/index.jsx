import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function ButtonBackHome() {
	const navigate = useNavigate();
	return (
		<Button onClick={() => navigate('/shopping/products')} variant='text' style={{ marginBottom: '0.5rem' }}>
			<ArrowBackIosIcon />
			Trở về trang chủ
		</Button>
	);
}

export default ButtonBackHome;
