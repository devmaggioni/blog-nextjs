import styled from "styled-components"
import Head from "next/head"

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

export default function App( {
	Component, pageProps
}) {
	return <>
		<Head>
			<meta charset="utf-8"></meta>
			<title>UndeadCat Blog</title>
			<link rel="shortcut icon" href="cat.ico" type="image/x-icon"/>
			{/*<meta property="og:image" content="https://image.png" />*/}
			<meta property="og:description" content="I developed this blog during a NextJs course.  It serves as learning." />
			<meta property="og:title" content="Undead Cat Blog" />
		</Head>
		<Container>
			<Header />
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</Container> < />
}