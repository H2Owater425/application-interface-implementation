import { useParams } from 'react-router-dom';

export default function WebPost(props) {
	const parameter = useParams();

	return <div>
		<h1>WebPost #{parameter['id']} WebPost #{parameter['id']} WebPost #{parameter['id']}</h1>
		<p>WebPost #{parameter['id']}</p>
	</div>;
}