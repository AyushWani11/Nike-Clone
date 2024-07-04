import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wishlistActions } from '../stores/WishlistSlice';
import Card from '../components/Card';
import '../css/cartpage.css';
import Navbar from '../components/Navbar';

const WishlistPage = () => {
	const dispatch = useDispatch();
	const wishlistItems = useSelector((state) => state.wishlist.itemsList);

	const removeItemHandler = (id) => {
		dispatch(wishlistActions.removeFromWishlist(id));
	};

	return (
		<>
			<Navbar />
			<div className='cart'>
				<h1>Your Wishlist</h1>
				{wishlistItems.length === 0 ? (
					<p>Your wishlist is empty!</p>
				) : (
					<div className='cart-page'>
						<div className='cart-grid'>
							{wishlistItems.map((item) => (
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
									isWishlist={true}
									pageType='wish'
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default WishlistPage;
