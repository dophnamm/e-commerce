import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 1,
	reducers: {
		increase(state) {
			return state + 1;
		},

		decrease(state) {
			return state - 1;
		},
	},
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions;
export default reducer;
