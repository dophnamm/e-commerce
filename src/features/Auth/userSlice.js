import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { TOKEN, USER } from 'constant/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
	const response = await userApi.register(payload);

	localStorage.setItem(TOKEN, response?.jwt);
	localStorage.setItem(USER, JSON.stringify(response?.user));

	return response?.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
	const response = await userApi.login(payload);

	localStorage.setItem(TOKEN, response?.jwt);
	localStorage.setItem(USER, JSON.stringify(response?.user));

	return response?.user;
});

const userSlice = createSlice({
	name: 'user',

	initialState: {
		currentUser: JSON.parse(localStorage.getItem(USER)) || {},
	},

	reducers: {
		logout(state) {
			localStorage.removeItem(USER);
			localStorage.removeItem(TOKEN);
			state.currentUser = {};
		},
	},

	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.currentUser = action.payload;
		},

		[login.fulfilled]: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
