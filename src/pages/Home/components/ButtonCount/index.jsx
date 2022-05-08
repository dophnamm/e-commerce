import { Button, Grid } from '@mui/material';
import { decrease, increase } from 'features/Counter/CounterSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ButtonCount(props) {
	const dispatch = useDispatch();
	const { count } = useSelector((state) => state);

	function handleIncrease() {
		dispatch(increase());
	}

	function handleDecrease() {
		dispatch(decrease());
	}

	return (
		<Grid container spacing={2} columns={16}>
			<Grid item xs={8}>
				<Button
					fullWidth
					variant='outlined'
					onClick={() => handleDecrease()}
					disabled={count <= 0 && true}
				>
					decrease
				</Button>
			</Grid>

			<Grid item xs={8}>
				<Button fullWidth variant='outlined' onClick={() => handleIncrease()}>
					increase
				</Button>
			</Grid>
		</Grid>
	);
}

export default ButtonCount;
