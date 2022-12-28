import styled from "styled-components"
import theme from "../../../styles/theme"

export const FlexContainer = styled.div`
@media (min-width: 450px){
	padding-top: 10rem;
	padding-bottom: 10rem;
}
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
min-height: 80vh;
padding-top: 5rem;
padding-bottom: 30%;
`

export const PostContainer = styled.div`
@media (min-width: 450px){
	margin-inline: 3rem;
}
position: relative;
display: inline-block;
background-color: ${theme.colors.card};
width: 90vw;
max-width: 450px;
height: 80vw;
max-height: 400px;
overflow: hidden;
text-align: left;
margin-bottom: 5rem;
border: 1px solid black;
border-radius: 10px;
padding-bottom: 2rem;
`

export const ImageContainer = styled.div`
position: relative;
width: 100%;
height: 18rem;
overflow: hidden;
border-bottom: 2px solid black;
`

export const Image = styled.img`
width: 100%;
max-height: 40rem;
`

export const Title = styled.h2`
font-size: 2rem;
margin-inline: 1.5rem;
margin-top: 2.5rem;
margin-bottom: 1rem;
`

export const Desc = styled.p`
display: inline-block;
text-align: justify;
font-size: 1.4rem;
margin-inline: 1.5rem;
margin-bottom: 1rem;
`

export const TagContainer = styled.div`
display: inline-block;
position: absolute;
top: 15.5rem;
left: 0.5rem;
`

export const Tag = styled.p`
float: left;
display: inline-block;
background-color: grey;
padding: 5px;
margin-right: 0.5rem;
margin-bottom: 0.5rem;
border: 0.5px solid black;
border-radius: 5px;
`

export const _Date = styled.p`
display: inline-block;
`

export const Author = styled.p`
display: inline-block;
margin-right: 2rem;
`

export const DateAndAuthorContainer = styled.div`
position: absolute;
bottom: 0.5rem;
left: 1.5rem;
`