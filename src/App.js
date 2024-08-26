import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import { useSelector } from 'react-redux';
import Auth from './pages/Auth';
import User from './pages/User';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<>
			<Router basename='/Nike-Clone'>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/login' component={Auth} />
					<Route path='/user' component={User} />
					<Route path='/cart' component={CartPage} />
					<Route path='/wish' component={WishlistPage} />
				</Switch>
			</Router>
			<ToastContainer />
		</>
	);
};

export default App;
