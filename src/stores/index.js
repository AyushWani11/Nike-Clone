import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import CartSlice from './cartSlice';
import WishlistSlice from './WishlistSlice';

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		cart: CartSlice.reducer,
		wishlist: WishlistSlice.reducer,
	},
});
export default store;
