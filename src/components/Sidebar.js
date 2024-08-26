import React, { useState } from 'react';
import '../css/sidebarcss.css';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

const Sidebar = ({
	onCategoryChange,
	onDivisionChange,
	onMinPriceChange,
	onMaxPriceChange,
	isOpen,
}) => {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedDivision, setSelectedDivision] = useState('');
	const [categoryOpen, setCategoryOpen] = useState(false);
	const [divisionOpen, setDivisionOpen] = useState(false);
	const [priceOpen, setPriceOpen] = useState(false);
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');

	const toggleCategory = () => {
		setCategoryOpen(!categoryOpen);
	};

	const toggleDivision = () => {
		setDivisionOpen(!divisionOpen);
	};

	const togglePrice = () => {
		setPriceOpen(!priceOpen);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		onCategoryChange(category);
	};

	const handleDivisionChange = (division) => {
		setSelectedDivision(division);
		onDivisionChange(division);
	};

	const handlePriceChange = () => {
		if (
			minPrice !== '' &&
			maxPrice !== '' &&
			parseInt(minPrice) > parseInt(maxPrice)
		) {
			toast.error('Minimum price should be less than maximum price');
			return;
		}
		onMinPriceChange(minPrice);
		onMaxPriceChange(maxPrice);
	};

	return (
		<div className={`sidebar ${isOpen ? 'isOpen' : ''}`}>
			<h3
				onClick={() => {
					onCategoryChange('');
					onDivisionChange('');
				}}
			>
				Show All
			</h3>
			<h3
				onClick={() => {
					onCategoryChange('Clothing');
					onDivisionChange('');
				}}
			>
				Clothing
			</h3>
			<h3
				onClick={() => {
					onCategoryChange('Shoes');
					onDivisionChange('');
				}}
			>
				Shoes
			</h3>
			<h3
				onClick={() => {
					onCategoryChange('Accessories');
					onDivisionChange('');
				}}
			>
				Accessories
			</h3>
			<h3
				onClick={() => {
					onDivisionChange('Men');
					onCategoryChange('');
				}}
			>
				Men
			</h3>
			<h3
				onClick={() => {
					onDivisionChange('Women');
					onCategoryChange('');
				}}
			>
				Women
			</h3>
			<h3
				onClick={() => {
					onDivisionChange('Kids');
					onCategoryChange('');
				}}
			>
				Kids
			</h3>

			<div className='collapsible-menu'>
				<div className='toggle-filter' onClick={toggleDivision}>
					<h3>Gender</h3>
					{!divisionOpen ? (
						<FontAwesomeIcon icon={faAngleDown} />
					) : (
						<FontAwesomeIcon icon={faAngleUp} />
					)}
				</div>
				{divisionOpen && (
					<div className='menu-content'>
						<div>
							<label>Men</label>
							<input
								type='radio'
								value='Men'
								checked={selectedDivision === 'Men'}
								onChange={() => handleDivisionChange('Men')}
								className='radio'
							/>
						</div>
						<div>
							<label>Women</label>
							<input
								type='radio'
								value='Women'
								checked={selectedDivision === 'Women'}
								onChange={() => handleDivisionChange('Women')}
								className='radio'
							/>
						</div>
						<div>
							<label>Kids</label>
							<input
								type='radio'
								value='Kids'
								checked={selectedDivision === 'Kids'}
								onChange={() => handleDivisionChange('Kids')}
								className='radio'
							/>
						</div>
					</div>
				)}
			</div>

			<div className='collapsible-menu'>
				<div className='toggle-filter' onClick={toggleCategory}>
					<h3>Products</h3>
					{!categoryOpen ? (
						<FontAwesomeIcon icon={faAngleDown} />
					) : (
						<FontAwesomeIcon icon={faAngleUp} />
					)}
				</div>
				{categoryOpen && (
					<div className='menu-content'>
						<div>
							<label>Shoes</label>
							<input
								type='radio'
								value='Shoes'
								checked={selectedCategory === 'Shoes'}
								onChange={() => handleCategoryChange('Shoes')}
								className='radio'
							/>
						</div>
						<div>
							<label>Clothing</label>
							<input
								type='radio'
								value='Clothing'
								checked={selectedCategory === 'Clothing'}
								onChange={() => handleCategoryChange('Clothing')}
								className='radio'
							/>
						</div>
						<div>
							<label>Accessories</label>
							<input
								type='radio'
								value='Accessories'
								checked={selectedCategory === 'Accessories'}
								onChange={() => handleCategoryChange('Accessories')}
								className='radio'
							/>
						</div>
					</div>
				)}
			</div>

			<div className='collapsible-menu'>
				<div className='toggle-filter' onClick={togglePrice}>
					<h3>Price</h3>
					{!priceOpen ? (
						<FontAwesomeIcon icon={faAngleDown} />
					) : (
						<FontAwesomeIcon icon={faAngleUp} />
					)}
				</div>
				{priceOpen && (
					<div className='menu-content'>
						<div>
							<label>Min Price:</label>
							<input
								type='number'
								value={minPrice}
								onChange={(e) => setMinPrice(e.target.value)}
								className='price-box'
							/>
						</div>
						<div>
							<label>Max Price:</label>
							<input
								type='number'
								value={maxPrice}
								onChange={(e) => setMaxPrice(e.target.value)}
								className='price-box'
							/>
						</div>
						<button onClick={handlePriceChange}>Apply Price Filter</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
