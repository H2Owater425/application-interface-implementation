import { useEffect, useState } from 'react';

export default function useWindowWidth() {
	const [width, setWidth] = useState(window['innerWidth']);

	useEffect(function () {
		function resizeHandler() {
			setWidth(window['innerWidth']);
	
			return;
		}

		window.addEventListener('resize', resizeHandler);
		
		return function () {
			window.removeEventListener('resize', resizeHandler);

			return;
		};
	}, []);

	return width;
}