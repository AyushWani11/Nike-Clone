import React, { useState } from 'react';
import JordanLogo from '../images/jordanlogo.png';
import ConverseLogo from '../images/converselogo.png';
import NikeLogo from '../images/nikelogo.png';
import '../css/navbarcss.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faCartShopping,
	faUser,
	faAngleLeft,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Navbar = ({ onDivisionChange, onCategoryChange, onSearchChange }) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const userDetails = useSelector((state) => state.auth.userDetails);
	const [helloText, setHelloText] = useState('Hello Everyone');

	useEffect(() => {
		const interval = setInterval(() => {
			setHelloText((prevText) =>
				prevText === 'Hello Everyone' ? 'Hi Everyone' : 'Hello Everyone'
			);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const handleSearchChange = (e) => {
		onSearchChange(e.target.value);
	};

	return (
		<div className='big-wrapper'>
			<div id='bar1'>
				<div>
					<img src={JordanLogo} alt='' />
					<img src={ConverseLogo} alt='' />
				</div>
				<div className='links'>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Men');
							onCategoryChange('');
						}}
					>
						Men
					</Link>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Women');
							onCategoryChange('');
						}}
					>
						Women
					</Link>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Unisex');
							onCategoryChange('');
						}}
					>
						Unisex
					</Link>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Kids');
							onCategoryChange('');
						}}
					>
						Kids
					</Link>
				</div>
			</div>
			<div id='bar2'>
				<img src={NikeLogo} alt='' />
				<div className='links linksMain'>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('');
							onCategoryChange('');
						}}
					>
						Home
					</Link>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Men');
							onCategoryChange('');
						}}
					>
						Men
					</Link>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Women');
							onCategoryChange('');
						}}
					>
						Women
					</Link>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Unisex');
							onCategoryChange('');
						}}
					>
						Unisex
					</Link>
					<Link
						to='/'
						className='link'
						onClick={() => {
							onDivisionChange('Kids');
							onCategoryChange('');
						}}
					>
						Kids
					</Link>
				</div>
				<div className='links2'>
					<input
						type='text'
						placeholder='Search...'
						onChange={handleSearchChange}
						id='search'
					/>
					<Link to='/wish'>
						<FontAwesomeIcon icon={faHeart} className='icons' id='heart' />
					</Link>
					<Link to='/cart'>
						<FontAwesomeIcon
							icon={faCartShopping}
							className='icons'
							id='cart'
						/>
					</Link>
					{isLoggedIn ? (
						<Link to='/user'>
							<FontAwesomeIcon icon={faUser} className='icons' />
							<span>{userDetails.name}</span>
						</Link>
					) : (
						<Link to='/login' id='login'>
							<FontAwesomeIcon icon={faUser} className='icons' />
							User
						</Link>
					)}
				</div>
			</div>
			<div id='bar3'>
				<div>
					<FontAwesomeIcon icon={faAngleLeft} className='icons' />
					<span>{helloText}</span>
					<FontAwesomeIcon icon={faAngleRight} className='icons' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
