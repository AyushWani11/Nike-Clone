import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import Navbar from '../components/Navbar';

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedDivision, setSelectedDivision] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setMinPrice('');
		setMaxPrice('');
	};

	const handleDivisionChange = (division) => {
		setSelectedDivision(division);
		setMinPrice('');
		setMaxPrice('');
	};

	const handleSearchChange = (term) => {
		setSearchTerm(term);
	};

	const handleMinPriceChange = (value) => {
		setMinPrice(value);
	};

	const handleMaxPriceChange = (value) => {
		setMaxPrice(value);
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
