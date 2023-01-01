import styled from "styled-components"

export const Container = styled.div`
margin-top: 2rem;
margin-bottom: 5rem;
width: 95%;
margin-inline: auto;
text-align: left;

hr {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

#title {
margin-bottom: 1rem;
font-size: 2rem;
}

button {
	background-color: #292E49;
	margin-bottom: 2rem;
	margin-top: 1rem;
	margin-left: 0.5rem;
}
`

export const CommentContainer = styled.div`
width: 80%;
max-width: 400px;
margin-inline: auto;
`

export const Comment= styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
padding-inline: 0.5rem;
border: 1.5px solid black;
border-radius: 5px;
background-color: #536976;
margin-bottom: 1rem;

:hover {
	border: 2px solid white;
}

h3 {
	font-size: 1.2rem;
	
}

#date {
	font-size: 0.8rem;
}

hr {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

p {
	display: inline-block;
}
`

export const ReplyContainer = styled.div`
display: none;
width: 90%;
background-color: #292E49;
margin-inline: auto;
margin-bottom: 5rem;
padding-top: 1rem;
padding-bottom: 3rem;

h2 {
	font-size: 1.5rem;
	margin-left: 1rem;
}
`

export const Reply = styled.div`
margin: 0.5rem;
padding-inline: 0.8rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
background-color: #757F9A;
border-radius: 5px;

#date {
	font-size: 0.8rem;
}

hr {
margin-top: 0.5rem;
margin-bottom: 0.5rem;
}`

/*
export const Container = styled.div`
margin-top: 2rem;
margin-bottom: 5rem;
width: 95%;
margin-inline: auto;
text-align: left;

button {
	background-color: #292E49;
	margin-bottom: 3rem;
}
#newComment input, textarea {
	color: black;
	width: 100%;
}
#newComment textarea {
	height: 5rem;
}
`

export const Title = styled.h2`
margin-bottom: 1rem;
font-size: 2rem;
`

export const CommentContainer = styled.div`
width: 80%;
max-width: 400px;
margin-inline: auto;
`

export const Comment= styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
padding-inline: 0.5rem;
border: 1.5px solid black;
border-radius: 5px;
background-color: #536976;
margin-bottom: 1rem;
:hover {
	border: 2px solid white;
}

h3 {
	font-size: 1.2rem;
	
}
#date {
	font-size: 0.8rem;
}
hr {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
#comment {
display: inline-block;
font-size: 1.2rem;
margin-top: 1rem;
}
p {
	display: inline-block;
}
`

export const ReplyContainer = styled.div`
display: none;
width: 90%;
background-color: blue;
margin-inline: auto;
margin-bottom: 5rem;
padding-top: 1rem;
padding-bottom: 3rem;
`

export const Reply = styled.div`
margin: 0.5rem;
padding-inline: 0.8rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
background-color: red;

#date {
	font-size: 0.8rem;
}

hr {
margin-top: 0.5rem;
margin-bottom: 0.5rem;
}
`*/