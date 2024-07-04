import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../stores/cartSlice';
import { wishlistActions } from '../stores/WishlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/card.css';

const Card = ({
	name,
	id,
	imgURL,
	price,
	division,
	category,
	quantity,
	pageType,
}) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.itemsList);
	const wishlistItems = useSelector((state) => state.wishlist.itemsList);

	const addToCart = () => {
		dispatch(
			cartActions.addToCart({
				name,
				id,
				price,
				imgURL,
				division,
				category,
			})
		);
		toast.success(`${name} added to cart 🛒`);
	};

	const addToWishlist = () => {
		dispatch(
			wishlistActions.addToWishlist({
				name,
				id,
				price,
				imgURL,
				division,
				category,
			})
		);
		toast.success(`${name} added to the wishlist ❤️`);
	};

	const moveToCart = () => {
		dispatch(
			cartActions.addToCart({
				name,
				id,
				price,
				imgURL,
				division,
				category,
			})
		);
		dispatch(wishlistActions.removeFromWishlist(id));
		toast.success(`${name} moved to cart ❤️➡️🛒`);
	};

	const removeItemHandler = () => {
		if (pageType === 'cart') {
			dispatch(cartActions.removeFromCart(id));
			toast.warning(`${name} removed from cart`);
		} else if (pageType === 'wish' || pageType === 'home') {
			dispatch(wishlistActions.removeFromWishlist(id));
			toast.warning(`${name} removed from Wishlist`);
		}
	};

	const isInCart = cartItems.some((item) => item.id === id);
	const isInWishlist = wishlistItems.some((item) => item.id === id);

	return (
		<div className='card'>
			<img src={imgURL} alt={name} />
			<div className='structure'>
				<div className='main-comp'>
					<div className='product-name'>
						<h3 className='product-name'>{name}</h3>
					</div>
					<h3 className='name'>
						{division}'s {category}
					</h3>
					<h3>${price}</h3>
				</div>
				<div>
					<FontAwesomeIcon
						icon={isInWishlist ? solidHeart : regularHeart}
						className='wishheart'
						onClick={isInWishlist ? removeItemHandler : addToWishlist}
					/>
				</div>
			</div>
			{quantity && <h3>Quantity: {quantity}</h3>}
			{pageType === 'home' ? (
				<>
					<button onClick={addToCart}>Add to Cart</button>
				</>
			) : pageType === 'cart' ? (
				<>
					<button onClick={addToCart}>Increase Quantity</button>
					<button onClick={removeItemHandler}>Remove</button>
				</>
			) : pageType === 'wish' ? (
				<>
					<button onClick={moveToCart}>Move to Cart</button>
					<button onClick={removeItemHandler}>Remove</button>
				</>
			) : null}
		</div>
	);
};

export default Card;
