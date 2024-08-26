import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: { isLoggedIn: false, userDetails: null },
	reducers: {
		login(state, action) {
			state.isLoggedIn = true;
			state.userDetails = action.payload;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.userDetails = null;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice;
