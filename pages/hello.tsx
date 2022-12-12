import React from 'react';
import Counter from '../components/counter';
import { withRouter } from 'next/router';
import { withStore } from '../store';

const Hello = ({ name, router }) => (
	<>
		<h1>Hello {name}!</h1>
		<pre>{JSON.stringify(router.query, null, '\t')}</pre>
		<Counter />
	</>
);

Hello.getInitialProps = props => {
	const { dispatch } = props.reduxStore;

	dispatch({
		type: 'INCREMENT'
	});
	dispatch({
		type: 'INCREMENT'
	});
	dispatch({
		type: 'INCREMENT'
	});

	return {};
};

export default withStore(withRouter(Hello));
