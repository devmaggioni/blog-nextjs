import styled from "styled-components"
import "../styles/globals.css"
import "../styles/post.css"
import theme from "../styles/theme"
import Header from "../layouts/components/Header"
import NavBar from "../layouts/components/NavBar"
import Footer from "../layouts/components/Footer"

const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${theme.colors.body};
padding-bottom: 2rem;
`

export default function App({ Component, pageProps }) {
	return <Container>
		<Header/>
		<NavBar/>
		<Component {...pageProps} />
		<Footer/>
	</Container>
}
