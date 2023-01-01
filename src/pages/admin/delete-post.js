import styled from "styled-components"

const Container = styled.div`
width: 90%;
margin-inline: auto;
margin-top: 5rem;
margin-bottom: 10rem;
`

const FormContainer = styled.div`
width: 90%;
margin-inline: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

form input, textarea {
display: block;
color: black;
}

form textarea {
	height: 10rem;
}

button {
margin-top: 3rem;
display: block;
color: black;
}
`

export function NewPost() {
	return (
		<Container>
	<FormContainer>
  <form action={"/api/create-post"} method="post">
  
  <input type="text" name="postId" placeholder="id do post" />
  
  <button type="submit">{"Enviar"}</button>
		</form>
  </FormContainer>
		</Container>
)
}

export default NewPost