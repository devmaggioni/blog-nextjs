import Document, {
	Html,
	Head,
	Main,
	NextScript
} from "next/document"
import Script from "next/script"
import {
	ServerStyleSheet
} from "styled-components"
import Analytics from "../layouts/components/Analytics"
import dotenv from "dotenv"
dotenv.config()

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
				sheet.collectStyles(<App {...props} />)
			})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
					{
						initialProps.styles
					}
					{
						sheet.getStyleElement()} < />
				)
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html>
        <Head>
				<Script
					id="Adsense-id"
					data-ad-client={process.env.ADSENSE}
					async="true"
					strategy="beforeInteractive"
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
					/>
        <Analytics />
        </Head>
        <body>
          <Main />
          <NextScript />
			</body>
      </Html>
		)
	}
}

	/*
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<Html lang="pt-BR">
						{initialProps.styles}
						{sheet.getStyleElement()}
					</Html>
				),
			}
		} finally {
			sheet.seal()
		}
	}
}*/