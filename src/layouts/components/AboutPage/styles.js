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
}

li > a {
padding-top: 1rem;
padding-bottom: 1rem;
padding-inline: 2rem;
}
`


/*import styled from "styled-components"
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
`*/