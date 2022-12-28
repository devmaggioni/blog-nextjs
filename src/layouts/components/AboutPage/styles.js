import styled from "styled-components"
import theme from "../../../styles/theme"

export const Container = styled.div`
height: 75vh;
overflow: hidden;
`

export const Card = styled.div`
@media (min-width: 450px){
	margin-top: 10rem;
	max-width: 800px;
}
width: 80%;
padding-top: 3rem;
padding-bottom: 3rem;
background-color: ${theme.colors.card};
margin-inline: auto;
margin-top: 40%;
border: 1px solid black;
border-radius: 10px;
`

export const Item = styled.div`
@media (min-width: 450px){
	padding-top: 3rem;
padding-bottom: 3rem;
font-size: 1.8rem;
}
text-align: center;
width: 60%;
margin-inline: auto;
font-size: 1.4rem;
padding-top: 2rem;
padding-bottom: 2rem;
padding-inline: 3rem;
background-color: ${theme.colors.header};
margin-bottom: 1rem;
border-radius: 10px;
`