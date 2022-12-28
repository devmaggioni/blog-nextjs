import { Container, Text } from "./styles"

function Footer(){
	return (
		<Container>
			<Text>&copy; 2022 a {new Date().getFullYear()} - todas as imagens ou conteúdos utilizados nesse site são para fins de aprendizado</Text>
		</Container>
	)
}

export default Footer