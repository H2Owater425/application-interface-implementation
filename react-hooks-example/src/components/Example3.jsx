import { useState } from 'react';

export default function Example3() {
	const [state, setState] = useState({
		count: 0
	});

	return <div>
		<p>Click {state['count']}</p>
		<button onClick={function () {
			setState({
				count: state['count'] + 1
			});

			return;
		}}>CCCCCCCCbal</button>
	</div>
}