import { useState } from 'react';

export default function Example2() {
	const [count, setCount] = useState(0);

	

	return <div>
		<p>Click {count}</p>
		<button onClick={function () {
			setCount(count + 1);

			return;
		}}>CCCCCCCCbal</button>
	</div>
}