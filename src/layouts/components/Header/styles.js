import styled from "styled-components"
import theme from "../../../styles/theme"

export const Container = styled.header`
width: 100%;
background-color: ${theme.colors.header};
text-align: center;
overflow: hidden;

#nextImage{
margin-top: 0.5rem;
margin-bottom: 0.5rem;
width: 250px;
}
`

export const Title = styled.h1`
font-size: 3rem;
line-height: 10rem;
`