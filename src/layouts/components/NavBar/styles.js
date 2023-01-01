import styled from "styled-components"
import theme from "../../../styles/theme"

export const Container = styled.nav`
width: 100%;
height: 5rem;
background-color: ${theme.colors.navbar};
`

export const Lista = styled.ul`
text-align: center;
`

export const Item = styled.li`
line-height: 4.5rem;
display: inline-block;
padding-inline: 1rem;
:hover {
transition: 0.5s;
border-bottom: 2px solid #F00000;
}
`

export const Text = styled.p`
@media(min-width: 450px){
font-size: 2rem;
}
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
font-size: 1.4rem;
`