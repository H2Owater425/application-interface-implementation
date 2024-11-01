import { useEffect, useState } from 'react';

export default function Example5() {
	const [count, setCount] = useState(0);

	useEffect(function () {
		console.log('componentDidMount', count);
		
		return function () {

		};
	}, []);

	useEffect(function () {
		console.log('componentDidUpdate', count);

		return function () {
			console.log('cleanUp by count', count);

			return;
		};
	}, [count]);

	return <div>
		<p>Click {count}</p>
		<button onClick={function () {
			setCount(count + 1);

			return;
		}}>CCCCCCCCbal</button>
	</div>
}