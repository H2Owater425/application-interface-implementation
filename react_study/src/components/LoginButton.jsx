import { useNavigate } from 'react-router-dom';

export default function LoginButton(props) {
	const navigate = useNavigate();
	
	return <button onClick={function () {
		window.setTimeout(function () {
			navigate(typeof(props['target']) === 'string' ? props['target'] : '/');

			return;
		}, typeof(props['time']) === 'number' ? props['time'] : 1000);
	
		return;
	}}>
		{typeof(props['name']) === 'string' ? props['name'] : '로그인'}
	</button>;
}