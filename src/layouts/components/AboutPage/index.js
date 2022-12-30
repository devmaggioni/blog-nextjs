import { Container, Main } from "./styles"

function CategoriesPage(){
	return (
		<Container>
			<Main>
				<ul>
		
					<li>
						<a href="https://github.com/devmaggioni">
						<i className="fa-brands fa-github"/>
		GitHub</a>
					</li>
		
					<li>
						<a href="https://t.me/devUndeadCat">
							<i className="fa-brands fa-telegram"/>
		Telegram</a>
					</li>
		
				</ul>
			</Main>
		</Container>
	)
}
export default CategoriesPage


/*import {
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

export default AboutPage*/