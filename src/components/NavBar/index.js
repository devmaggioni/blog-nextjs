import { useRouter } from "next/router";
import { Container, Lista, Item, Text } from "./styles";

function NavBar() {
  const router = useRouter();
  return (
    <>
      <Container>
        <Lista>
          <Item onClick={() => router.push("/")}>
            <Text translate="no">Home</Text>
          </Item>

          <Item onClick={() => router.push("/categories")}>
            <Text translate="no">Categorias</Text>
          </Item>

          <Item onClick={() => router.push("/about")}>
            <Text translate="no">Sobre</Text>
          </Item>
        </Lista>
      </Container>
    </>
  );
}

export default NavBar;
