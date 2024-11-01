import { Link, Route, Routes } from 'react-router-dom';
import WebPost from './WebPost';

export default function Web() {
	
	return <div>
		<h1>Web Web Web</h1>
		<ul>
			<li>
				<Link to="1">Post #1</Link>
			</li>
			<li>
				<Link to="2">Post #2</Link>
			</li>
			<li>
				<Link to="3">Post #3</Link>
			</li>
			<li>
				<Link to="4">Post #4</Link>
			</li>
		</ul>
		<Routes>
			<Route path=":id" element={<WebPost />} />
		</Routes>
	</div>;
}