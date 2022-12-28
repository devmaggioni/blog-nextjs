import Link from "next/link"
import { Background, Container, Item, LinkNormal } from "./styles"

function CategoriesPage(){
	return (
		<>
			<Background>
				<Container>

					<Item>
						<Link legacyBehavior href="/categories/sem-categoria">
							<LinkNormal>Sem Categoria</LinkNormal>
						</Link>
					</Item>

					<Item>
						<Link legacyBehavior href="/categories/tecnologia">
							<LinkNormal>Tecnologia</LinkNormal>
						</Link>
					</Item>

					<Item>
						<Link legacyBehavior href="/categories/tutorial">
							<LinkNormal>Tutorial</LinkNormal>
						</Link>
					</Item>

					<Item>
						<Link legacyBehavior href="/categories/programação">
							<LinkNormal>Programação</LinkNormal>
						</Link>
					</Item>

				</Container>
			</Background>
		</>
	)
}

export default CategoriesPage