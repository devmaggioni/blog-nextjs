import styled from "styled-components"
import theme from "../../../styles/theme"

export const Container = styled.div`
min-height: 60vh;
padding-top: 10rem;
`

export const Main = styled.main`
width: 70vw;
max-width: 400px;
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
:hover {
	border: 2px solid white;
}
}

li > a {
padding-top: 1rem;
padding-bottom: 1rem;
padding-inline: 2rem;
}
`