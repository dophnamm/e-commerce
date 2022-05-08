import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import ButtonCount from './components/ButtonCount';

function Home() {
	const { count } = useSelector((state) => state);
	return (
		<div className='home__container'>
			<h1>Home</h1>

			<div className='counter'>
				<h3>Count : {count}</h3>
				<ButtonCount />
			</div>
		</div>
	);
}

export default Home;
