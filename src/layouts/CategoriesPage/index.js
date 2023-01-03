import { useRouter } from "next/router";
import { Container, Main } from "./styles";

function CategoriesPage() {
  const router = useRouter();
  return (
    <Container>
      <h1>Categorias</h1>
      <Main>
        <ul>
          <li
            onClick={() =>
              setTimeout(() => {
                router.push("/categories/sem-categoria");
              }, 300)
            }
          >
            <a>Sem Categoria</a>
          </li>

          <li
            onClick={() =>
              setTimeout(() => {
                router.push("/categories/tecnologia");
              }, 300)
            }
          >
            <a>Tecnologia</a>
          </li>

          <li
            onClick={() =>
              setTimeout(() => {
                router.push("/categories/tutorial");
              }, 300)
            }
          >
            <a>Tutorial</a>
          </li>

          <li
            onClick={() =>
              setTimeout(() => {
                router.push("/categories/programação");
              }, 300)
            }
          >
            <a>Programação</a>
          </li>
        </ul>
      </Main>
    </Container>
  );
}
export default CategoriesPage;
