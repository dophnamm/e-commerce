import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsApi from 'api/productsApi';

export const getAllProducts = createAsyncThunk('products/get-all', async (params) => {
	const response = await productsApi.getAll(params);

	return response;
});

const productsSlice = createSlice({
	name: 'products',

	initialState: {
		currentProducts: {},
	},
	reducers: {},
	extraReducers: {
		[getAllProducts.fulfilled]: (state, action) => {
			state.currentProducts = action.payload;
		},
	},
});

const { reducer } = productsSlice;
export default reducer;
