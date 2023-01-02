import "../styles/globals.css"
import PropTypes from "prop-types"
import * as gtag from "../../lib/gtag"
import {
	useEffect
} from 'react'
import {
	useRouter
} from "next/router"

// components
import Seo from "../layouts/components/Seo"
import Header from "../layouts/components/Header"
import NavBar from "../layouts/components/NavBar"
import Footer from "../layouts/components/Footer"

export default function App( {
	Component, pageProps
}) {

	const router = useRouter()
	useEffect(() => {

		/* google ads */
		var ads = document.getElementsByClassName("adsbygoogle").length;
		for (var i = 0; i < ads; i++) {
			try {
				(adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {}
		}

   /* analytics */
		const handleRouteChange = (url) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	},
		[router.events])

	return (
		<>
		<Seo />
		<div className="appContainer">
				<Header />
				<NavBar />
				<Component {...pageProps} />
				<Footer />
		</div> < />
	)
}

	App.propTypes = {
		Component: PropTypes.any,
		pageProps: PropTypes.any
	}