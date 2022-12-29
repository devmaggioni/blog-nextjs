import "../styles/globals.css"

// components
import Seo from "../layouts/components/Seo"
import Header from "../layouts/components/Header"
import NavBar from "../layouts/components/NavBar"
import Footer from "../layouts/components/Footer"

export default function App( {
	Component, pageProps
}) {
	return (
		<>
			<Seo/>
			<div className="appContainer">
				<Header />
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</div> 
		</>
	)
}