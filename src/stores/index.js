import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import CartSlice from './cartSlice';
import WishlistSlice from './WishlistSlice';
import FilterSlice from './filterSlice';

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		cart: CartSlice.reducer,
		wishlist: WishlistSlice.reducer,
		filters: FilterSlice.reducer,
	},
});
export default store;
