import styled from "styled-components"
import theme from "../../../styles/theme"

export const Container = styled.div`
min-height: 60vh;
padding-top: 10rem;
`

export const Main = styled.main`
width: 70vw;
background-color: ${theme.colors.card};
margin-inline: auto;
border: 1px solid black;
border-radius: 5px;

ul {
margin-top: 1.5rem;
margin-bottom: 1.5rem;
list-style-type: none;
text-align: center;
}

ul > li {
padding-top: 1rem;
padding-bottom: 1rem;
background-color: ${theme.colors.header};
margin-bottom: 0.5rem;
width: 60%;
margin-inline: auto;
border-radius: 5px;
overflow: hidden;
}

li > a {
padding-top: 1rem;
padding-bottom: 1rem;
}
`


/*
export const Background = styled.div`
@media (min-width: 450px){
	padding-top: 10rem;
padding-bottom: 10rem;
}
padding-top: 30%;
padding-bottom: 30%;
min-height: 50vh;
`

export const Container = styled.div`
@media (min-width: 450px){
	max-width: 800px;
}
padding-top: 4rem;
width: 80%;
min-height: 30rem;
background-color:
margin-inline: auto;
border: 1px solid black;
border-radius: 10px;
`

export const Item = styled.div`
@media (min-width: 450px){
font-size: 1.8rem;
	padding-top: 3rem;
padding-bottom: 3rem;
}
text-align: center;
background-color: ${theme.colors.header};
width: 70%;
margin-inline: auto;
padding-top: 1.5rem;
padding-bottom: 1.5rem;
margin-bottom: 2rem;
border: 0.5px solid black;
border-radius: 5px;
overflow: hidden;
`

export const LinkNormal = styled.a`
font-size: 1.2rem;
padding-inline: 5rem;
padding-top: 1rem;
padding-bottom: 1rem;
`*/