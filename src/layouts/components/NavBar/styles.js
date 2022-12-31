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

export const LinkNormal = styled.a`
@media(min-width: 450px){
font-size: 2rem;
}
font-size: 1.4rem;
`