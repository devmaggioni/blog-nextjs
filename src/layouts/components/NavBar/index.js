import { useRouter } from "next/router"
import { Container, Lista, Item, LinkNormal } from "./styles"

function NavBar(){
	const router = useRouter()
	return (
		<>
			<Container>
				<Lista>
				
					<Item onClick={()=>router.push("/")}>
						<LinkNormal>Home</LinkNormal>
					</Item>
					
					<Item onClick={()=>router.push("/categories")}>
						<LinkNormal>Categorias</LinkNormal>
					</Item>

					<Item onClick={()=>router.push("/about")}>
						<LinkNormal>Sobre</LinkNormal>
					</Item>
					
				</Lista>
			</Container>
		</>
	)
}

export default NavBar