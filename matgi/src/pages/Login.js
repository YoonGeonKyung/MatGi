import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { masterID } from '../store/atom';

const Login = () => {
	const [account, setAccount] = useState({ id: '', password: '' });
	const navigate = useNavigate();
	const master = useRecoilValue(masterID);

	const LoginClickHandler = () => {
		if (account.id === master.id && account.password === master.password) {
			localStorage.setItem('user', true);
		}
		navigate('/');
	};

	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="ID"
					onChange={e => setAccount({ ...account, id: e.target.value })}
				></input>
			</form>
			<form>
				<input
					type="password"
					placeholder="Password"
					onChange={e => setAccount({ ...account, password: e.target.value })}
				></input>
			</form>
			<button onClick={LoginClickHandler}>Log In</button>
		</div>
	);
};

export default Login;
