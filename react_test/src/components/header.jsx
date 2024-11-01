export default function () {
	return <div>asdf</div>
}

//import { Component } from 'react';

//export default class Header extends Component {
//	render() {
//		const style = {
//			color: 'red',
//			backgroundColor: 'yellow'
//		};
//		const webStyle = {
//			color: 'brown'
//		};

//		const array1 = ['one', 'two'];
//		const array2 = ['three', 'four'];
//		const combine = array1.concat(array2).concat(Object.values(style));
//		const [first, second, thrid, forth, ...others] = combine;

//		function aaa(..._arguments) {
//			alert(_arguments);
//		}

//		aaa('1', '2', '3', '4');

//		return (
//			<header>
//				<h1 style={webStyle}>{this['props']['title']}</h1>
//				<div style={style}>
//					{this['props']['description']}
//					{`${first} - ${second} - ${thrid} - ${forth} - ${others}`}
//				</div>
//			</header>
//		);
//	}
//}