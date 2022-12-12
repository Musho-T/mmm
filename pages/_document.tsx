import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, Html, NextScript } from "next/document";

/**
 * Override document to be able use styled components
 * and set lang attribute.
 * Note: renders on server only
 */
class AppDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		const enhanceApp = App => props => sheet.collectStyles(<App {...props} />);

		try {
			ctx.renderPage = () => originalRenderPage({ enhanceApp });

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
