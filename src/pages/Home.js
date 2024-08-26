import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { filtersActions } from '../stores/filterSlice.js';

const Home = () => {
	const dispatch = useDispatch();

	const selectedCategory = useSelector(
		(state) => state.filters.selectedCategory
	);
	const selectedDivision = useSelector(
		(state) => state.filters.selectedDivision
	);
	const minPrice = useSelector((state) => state.filters.minPrice);
	const maxPrice = useSelector((state) => state.filters.maxPrice);
	const searchTerm = useSelector((state) => state.filters.searchTerm);

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

	const handleMinPriceChange = (value) => {
		dispatch(filtersActions.setMinPrice(value));
	};

	const handleMaxPriceChange = (value) => {
		dispatch(filtersActions.setMaxPrice(value));
	};

	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = (isOpen) => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='home-container'>
			<Navbar
				onCategoryChange={handleCategoryChange}
				onDivisionChange={handleDivisionChange}
				onSearchChange={handleSearchChange}
			/>
			<Products toggleSidebar={toggleSidebar} />
			<div className='mainpage'>
				<Sidebar
					onCategoryChange={handleCategoryChange}
					onDivisionChange={handleDivisionChange}
					onMinPriceChange={handleMinPriceChange}
					onMaxPriceChange={handleMaxPriceChange}
					isOpen={isOpen}
				/>
				<ProductGrid
					searchTerm={searchTerm}
					selectedCategory={selectedCategory}
					selectedDivision={selectedDivision}
					minPrice={minPrice}
					maxPrice={maxPrice}
				/>
			</div>
		</div>
	);
};

export default Home;
