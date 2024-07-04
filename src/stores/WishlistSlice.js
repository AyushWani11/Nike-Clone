// src/stores/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const WishlistSlice = createSlice({
	name: 'wishlist',
	initialState: {
		itemsList: [],
	},
	reducers: {
		addToWishlist(state, action) {
			const newItem = action.payload;
			const existingItem = state.itemsList.find(
				(item) => item.id === newItem.id
			);
			if (!existingItem) {
				state.itemsList.push({
					id: newItem.id,
					name: newItem.name,
					imgURL: newItem.imgURL,
					price: newItem.price,
					division: newItem.division,
					category: newItem.category,
				});
			}
		},
		removeFromWishlist(state, action) {
			const id = action.payload;
			state.itemsList = state.itemsList.filter((item) => item.id !== id);
		},
	},
});

export const wishlistActions = WishlistSlice.actions;

export default WishlistSlice;
