import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',

	initialState: {
		listProduct: [],
	},

	reducers: {
		addProductToCart(state, action) {
			const newItem = action.payload;
			const index = state.listProduct.findIndex((item) => item.id === newItem.id);

			if (index >= 0) {
				state.listProduct[index].count += newItem.count;
			} else {
				return {
					...state,
					listProduct: [...state.listProduct, newItem],
				};
			}
		},

		additionalItem(state, action) {
			const newItem = action.payload;
			const index = state.listProduct.findIndex((item) => item.id === newItem.id);

			if (index >= 0) {
				state.listProduct[index].count = newItem.count;
			}
		},

		deleteItem(state, action) {
			return {
				...state,
				listProduct: state.listProduct.filter((item) => item.id !== action.payload),
			};
		},
	},
});

const { actions, reducer } = cartSlice;
export const { addProductToCart, additionalItem, deleteItem } = actions;
export default reducer;
