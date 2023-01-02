import "../styles/globals.css"
import PropTypes from "prop-types"

// components
import Header from "../layouts/components/Header"
import NavBar from "../layouts/components/NavBar"
import Footer from "../layouts/components/Footer"

export default function App({
	Component, pageProps
}) {
	return (
		<>
			<div className="appContainer">
				<Header />
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</div> 
		</>
	)
}

App.propTypes = {
	Component: PropTypes.any, 
	pageProps: PropTypes.any
}