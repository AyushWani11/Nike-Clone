import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsList: [],
		totalQuantity: 0,
		totalPrice: 0,
		showCart: false,
	},
	reducers: {
		replaceData(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.itemsList = action.payload.itemsList;
			state.totalPrice = action.payload.totalPrice;
		},
		addToCart(state, action) {
			const newItem = action.payload;

			const existingItem = state.itemsList.find(
				(item) => item.id === newItem.id
			);

			if (existingItem) {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;
			} else {
				state.itemsList.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
					imgURL: newItem.imgURL,
					division: newItem.division,
					category: newItem.category,
				});
			}
			state.totalQuantity++;
			state.totalPrice += newItem.price;
		},
		removeFromCart(state, action) {
			const id = action.payload;

			const existingItem = state.itemsList.find((item) => item.id === id);
			if (existingItem) {
				if (existingItem.quantity === 1) {
					state.itemsList = state.itemsList.filter((item) => item.id !== id);
				} else {
					existingItem.quantity--;
					existingItem.totalPrice -= existingItem.price;
				}
				state.totalQuantity--; // Decrease total quantity by 1
				state.totalPrice -= existingItem.price;
			}
		},
		setShowCart(state) {
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = CartSlice.actions;

export default CartSlice;
