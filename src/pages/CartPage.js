import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../stores/cartSlice';
import Card from '../components/Card';
import '../css/cartpage.css';
import Navbar from '../components/Navbar';
import { filtersActions } from '../stores/filterSlice.js';

const CartPage = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.itemsList);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const totalPrice = useSelector((state) => state.cart.totalPrice);

	const selectedCategory = useSelector(
		(state) => state.filters.selectedCategory
	);
	const selectedDivision = useSelector(
		(state) => state.filters.selectedDivision
	);

	const handleCategoryChange = (category) => {
		dispatch(filtersActions.setCategory(category));
		dispatch(filtersActions.setMinPrice(''));
		dispatch(filtersActions.setMaxPrice(''));
	};

	const handleDivisionChange = (division) => {
		dispatch(filtersActions.setDivision(division));
		dispatch(filtersActions.setMinPrice(''));
		dispatch(filtersActions.setMaxPrice(''));
	};

	const handleSearchChange = (term) => {
		dispatch(filtersActions.setSearchTerm(term));
	};

	const removeItemHandler = (id) => {
		dispatch(cartActions.removeFromCart(id));
	};

	return (
		<>
			<Navbar
				onCategoryChange={handleCategoryChange}
				onDivisionChange={handleDivisionChange}
				onSearchChange={handleSearchChange}
			/>
			<div className='cart'>
				<h1>Your Shopping Cart</h1>
				{totalQuantity === 0 ? (
					<p>Your cart is empty!</p>
				) : (
					<div className='cart-page'>
						<div className='cart-grid'>
							{cartItems.map((item) => (
								<Card
									key={item.id}
									id={item.id}
									name={item.name}
									imgURL={item.imgURL}
									price={item.price}
									division={item.division}
									category={item.category}
									quantity={item.quantity}
									showRemoveButton={true}
									onRemove={removeItemHandler}
									pageType='cart'
								/>
							))}
						</div>
						<h2>Total Quantity: {totalQuantity}</h2>
						<h2>Total Price: ${totalPrice.toFixed(2)}</h2>
					</div>
				)}
			</div>
		</>
	);
};

export default CartPage;
