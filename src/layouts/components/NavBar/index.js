import Link from "next/link"
import { Container, Lista, Item, LinkNormal } from "./styles"

function NavBar(){
	return (
		<>
			<Container>
				<Lista>
					<Item>
						<Link href="/" legacyBehavior>
							<LinkNormal>Home</LinkNormal>
						</Link>
					</Item>
					<Item>
						<Link href="/categories" legacyBehavior>
							<LinkNormal>Categorias</LinkNormal>
						</Link>
					</Item>
					<Item>
						<Link href="/about" legacyBehavior>
							<LinkNormal>Sobre</LinkNormal>
						</Link>
					</Item>
				</Lista>
			</Container>
		</>
	)
}

export default NavBar