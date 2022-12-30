import Link from "next/link"
import { Container, Main } from "./styles"

function CategoriesPage(){
	return (
		<Container>
		<Main>
		<ul>
		
		<li>
		<Link legacyBehavior href="/categories/sem-categoria">
		<a>Sem Categoria</a>
		</Link>
		</li>
		
		<li>
		<Link legacyBehavior href="/categories/tecnologia">
		<a>Tecnologia</a>
		</Link>
		</li>
		
		<li>
		<Link legacyBehavior href="/categories/tutorial">
		<a>Tutorial</a>
		</Link>
		</li>
		
		<li>
		<Link legacyBehavior href="/categories/programação">
		<a>Programação</a>
		</Link>
		</li>
		
		</ul>
		</Main>
		</Container>
		)
}
export default CategoriesPage


/*import { Background, Container, Item, LinkNormal } from "./styles"

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

export default CategoriesPage*/