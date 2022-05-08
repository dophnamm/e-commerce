import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.scss';

InputQuantity.propTypes = {
	additionalCount: PropTypes.func,
	currentCount: PropTypes.number,
	handleGetCount: PropTypes.func,
};

function InputQuantity({ handleGetCount, additionalCount, currentCount }) {
	const [count, setCount] = useState(currentCount || 1);

	useEffect(() => {
		if (!currentCount && handleGetCount) {
			handleGetCount(count);
		}
	}, [count]);

	function handleIncrease() {
		if (currentCount) {
			const newCount = currentCount + 1;
			additionalCount(newCount);
			setCount(newCount);
			return;
		}

		setCount(count + 1);
	}

	function handleDecrease() {
		if (currentCount) {
			const newCount = currentCount - 1;
			additionalCount(newCount);
			setCount(newCount);
			return;
		}

		setCount(count - 1);
	}

	function handleChangeCount(event) {
		const newCount = Number(event.target.value);
		if (additionalCount) {
			additionalCount(newCount);
		}
		setCount(newCount);
	}

	return (
		<div className='form__inner'>
			<button
				disabled={count <= 1 ? true : false}
				className='form__button-decrease'
				onClick={() => {
					handleDecrease();
				}}
			>
				<RemoveIcon className='form__icon' />
			</button>

			<input
				value={count}
				onChange={(e) => {
					if (e.target.value === '0') return;
					handleChangeCount(e);
				}}
				className='form__input'
			/>

			<button
				className='form__button-increase'
				onClick={() => {
					handleIncrease();
				}}
			>
				<AddIcon className='form__icon' />
			</button>
		</div>
	);
}

export default InputQuantity;
