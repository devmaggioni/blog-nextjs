// SEO
import NextSeo from "../layouts/components/Seo"

// styles
import "../styles/globals.css"
import "../styles/post.css"

// components
import Header from "../layouts/components/Header"
import NavBar from "../layouts/components/NavBar"
import Footer from "../layouts/components/Footer"

import styled from "styled-components"
import theme from "../styles/theme"
const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${theme.colors.body};
padding-bottom: 2rem;
`

export default function App( {
	Component, pageProps
}) {
	return (
		<>
			<NextSeo/>
			<Container>
				<Header />
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</Container> 
		</>
	)
}