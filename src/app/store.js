import counterReducer from '../features/Counter/CounterSlice';
import userReducer from 'features/Auth/userSlice';
import productsReducer from 'features/Products/productsSlice';
import cartReducer from 'features/Cart/CartSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducers = {
	count: counterReducer,
	user: userReducer,
	products: productsReducer,
	cart: cartReducer,
};

const store = configureStore({
	reducer: rootReducers,
});

export default store;
