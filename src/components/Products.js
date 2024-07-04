import '../css/productscss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Products = ({ toggleSidebar }) => {
	const [filtersVisible, setFiltersVisible] = useState(true);

	const toggleFilters = () => {
		setFiltersVisible(!filtersVisible);
		toggleSidebar(!filtersVisible);
	};

	return (
		<div className='product-wrapper'>
			<div id='products'>
				<h2>All Products</h2>
			</div>
			<div id='filters'>
				<div onClick={toggleFilters}>
					{filtersVisible ? 'Show Filters' : 'Hide Filters'}
					<FontAwesomeIcon icon={faFilter} className='filter-icon' />
				</div>
			</div>
		</div>
	);
};

export default Products;
