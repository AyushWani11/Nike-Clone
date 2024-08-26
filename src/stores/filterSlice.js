// src/stores/filtersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedCategory: '',
	selectedDivision: '',
	minPrice: '',
	maxPrice: '',
	searchTerm: '',
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategory(state, action) {
			state.selectedCategory = action.payload;
		},
		setDivision(state, action) {
			state.selectedDivision = action.payload;
		},
		setMinPrice(state, action) {
			state.minPrice = action.payload;
		},
		setMaxPrice(state, action) {
			state.maxPrice = action.payload;
		},
		setSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		resetFilters(state) {
			return initialState;
		},
	},
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice;
