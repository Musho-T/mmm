import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInterval from '../hooks/use-interval';
import Clock from '../components/clock';
import Router from 'next/router';
import { withStore } from '../store';

const IndexPage = () => {
	// Tick the time every second
	const dispatch = useDispatch();
	useInterval(() => {
		dispatch({
			type: 'TICK',
			light: true,
			lastUpdate: Date.now()
		});
	}, 1000);

	const handler = () => {
		console.log(111);
	};

	useEffect(() => {
		console.log('000');
		Router.events.on('routeChangeStart', handler);

		return () => {
			console.log(222);
			Router.events.off('routeChangeStart', handler);
		};
	});

	return (
		<>
			<Clock />
		</>
	);
};

IndexPage.getInitialProps = (props) => {
	// Tick the time once, so we'll have a
	// valid time before first render
	const { dispatch } = props.reduxStore;

	dispatch({
		type: 'TICK',
		light: typeof window === 'object',
		lastUpdate: Date.now()
	});

	return {};
};

export default withStore(IndexPage);
