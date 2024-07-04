import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../stores/authSlice';

const User = () => {
	const userDetails = useSelector((state) => state.auth.userDetails);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(authActions.logout());
		history.push('/login');
	};

	return (
		<div>
			<div className='user'>
				<h1>Welcome to Nike</h1>
				<span>{userDetails.name}</span>
				<span>{userDetails.email}</span>
				<button onClick={handleLogout}>Log Out</button>
			</div>
		</div>
	);
};

export default User;
