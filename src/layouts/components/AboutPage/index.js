import {
	Container,
	Card,
	Item
} from "./styles"

function AboutPage(){
	return (
		<Container>
			<Card>
				<Item onClick={()=>{
					document.location = "https://github.com/devmaggioni"
				}}>GitHub</Item>
				<Item onClick={()=>{
					document.location = "https://t.me/devUndeadCat"
				}}>Telegram</Item>
			</Card>
		</Container>
	)
}

export default AboutPage