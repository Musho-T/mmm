import App from 'next/app';
import React from 'react';
import Link from 'next/link';
import { Menu, Button } from 'antd';

const MyMenu: React.FC = () => {
	const [key, setKey] = React.useState('home');

	return (
		<Menu onClick={(e) => setKey(e.key)} selectedKeys={[key]} mode="horizontal">
			<Menu.Item key="/">
				<Button>
					<Link href="/">
						<a href="/">home</a>
					</Link>
				</Button>
			</Menu.Item>
			<Menu.Item key="/hello">
				<Button>
					<Link href="/hello?aaa=123&bbb=321" as={`/hello/123/word/321`}>
						hello
					</Link>
				</Button>
			</Menu.Item>
		</Menu>
	);
};

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<MyMenu />
				<p>Hello World</p>
				<Component {...pageProps} />
			</>
		);
	}
}

export default MyApp;
