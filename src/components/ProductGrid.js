import React, { useEffect, useState } from 'react';
import Card from './Card';

const ProductGrid = ({
	selectedCategory,
	selectedDivision,
	minPrice,
	maxPrice,
	searchTerm,
}) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);

		let url = `http://localhost:5000/products`;

		if (searchTerm) {
			url += `?q=${encodeURIComponent(searchTerm)}`;
		}

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((error) => {
				setError('Error fetching products: ' + error.message);
				setLoading(false);
			});
	}, [searchTerm]);

	useEffect(() => {
		const filtered = filterProducts(
			products,
			selectedCategory,
			selectedDivision,
			minPrice,
			maxPrice
		);
		setFilteredProducts(filtered);
	}, [products, selectedCategory, selectedDivision, minPrice, maxPrice]);

	const filterProducts = (products, category, division, min, max) => {
		return products
			.filter((product) => {
				const matchesCategory =
					!category ||
					product.category.toLowerCase() === category.toLowerCase();
				const matchesDivision =
					!division ||
					product.division.toLowerCase() === division.toLowerCase();
				const matchesPrice =
					(!min || product.listPrice >= min) &&
					(!max || product.listPrice <= max);
				const matchesSearchTerm =
					!searchTerm ||
					product.productName.toLowerCase().includes(searchTerm.toLowerCase());

				return (
					matchesCategory &&
					matchesDivision &&
					matchesPrice &&
					matchesSearchTerm
				);
			})
			.slice(0, 12);
	};

	if (loading) {
		return <p>Loading products...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className='grid-wrapper'>
			{filteredProducts.map((product, index) => (
				<Card
					key={index}
					id={product.articleNo}
					name={product.productName}
					imgURL={product.imageUrl}
					price={product.listPrice}
					division={product.division}
					category={product.category}
					pageType='home'
				/>
			))}
			{filteredProducts.length === 0 && <p>No products found.</p>}
		</div>
	);
};

export default ProductGrid;
