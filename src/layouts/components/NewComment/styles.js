import styled from "styled-components"

export const Container = styled.div`
display: none;
width: 80%;
margin-inline: auto;
margin-bottom: 3rem;
padding-top: 1rem;
padding-inline: 0.5rem;
border: 1.5px solid black;
border-radius: 5px;
background-color: #536976;
overflow: hidden;

input, textarea {
	color: black;
	width: 95%;
}

textarea {
	height: 5rem;
	margin-bottom: 1rem;
}
`