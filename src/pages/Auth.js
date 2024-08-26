import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../stores/authSlice';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../css/auth.css';

const Auth = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(authActions.login(formData));
		history.push('/');
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className='container'>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<label htmlFor='email'>Email-Id</label>
				<input
					type='email'
					name='email'
					id='email'
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					id='password'
					value={formData.password}
					onChange={handleChange}
					required
					minLength={6}
				/>
				<button className='login-btn' type='submit'>
					Login
				</button>
			</form>
		</div>
	);
};

export default Auth;
