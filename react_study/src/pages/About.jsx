import queryString from 'query-string';
import { useLocation, useParams } from 'react-router-dom';

export default function About() {
	const parameter = useParams();
	const location = useLocation();

	console.log(JSON.stringify(queryString.parse(location['search'])))

	return <div>
		I am About 이에요.
		<br />
		{typeof(parameter['id']) !== 'undefined' ? parameter['id'] : null}
		{typeof(location['search']) !== 'undefined' ? JSON.stringify(queryString.parse(location['search'])) : null}
	</div>;
}