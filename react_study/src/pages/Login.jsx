import LoginButton from '../components/LoginButton';

export default function Login() {
	return <div>
		<h2>로그인</h2>
		<LoginButton name="정현우" time={10000} target="/web" />
	</div>;
}