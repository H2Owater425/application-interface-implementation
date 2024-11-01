import { NavLink } from 'react-router-dom';

export default function _NavLink() {
	return <ul style={{
		display: 'flex',
		flexDirection: 'row',
		listStyleType: 'none',
		gap: '8px',
		paddingLeft: '20px'
	}}>
		<li>
			<NavLink style={function (props) {
				return {
					color: props['isActive'] ? 'green' : 'blue'
				};
			}} to="/">Home</NavLink>
		</li>
		<li>
			<NavLink style={function (props) {
				return {
					color: props['isActive'] ? 'green' : 'blue'
				};
			}} to="/about">About</NavLink>
		</li>
		<li>
			<NavLink style={function (props) {
				return {
					color: props['isActive'] ? 'green' : 'blue'
				};
			}} to="/about?name=aaa">About?name=aaa</NavLink>
		</li>
		<li>
			<NavLink style={function (props) {
				return {
					color: props['isActive'] ? 'green' : 'blue'
				};
			}} to="/profile">Profile</NavLink>
		</li>
		<li>
			<NavLink style={function (props) {
				return {
					color: props['isActive'] ? 'green' : 'blue'
				};
			}} to="/profile/profileSub1">ProfileSub1</NavLink>
		</li>
		<li>
			<NavLink style={function (props) {
				return {
					color: props['isActive'] ? 'green' : 'blue'
				};
			}} to="/web">web</NavLink>
		</li>
	</ul>;
}