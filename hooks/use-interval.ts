import { useEffect } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback: () => void, delay: number) => {
	useEffect(() => {
		const handler = () => {
			if (callback) {
				callback();
			}
		};

		if (delay !== null) {
			const id = setInterval(handler, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

export default useInterval;
