import { useParams } from 'react-router-dom';

export default function Profile() {
	const paramter = useParams();

	return <div>
		I am Profile 이에요.
		<br />
		{paramter['id']}
	</div>;
}