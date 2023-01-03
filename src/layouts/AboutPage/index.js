import { Container, Main } from "./styles";
import { useRouter } from "next/router";

function CategoriesPage() {
  const router = useRouter();
  return (
    <Container>
      <h1>Sobre</h1>
      <Main>
        <ul>
          <li
            onClick={() =>
              setTimeout(() => {
                router.push("https://github.com/devmaggioni");
              }, 300)
            }
          >
            <a>
              <i className="fa-brands fa-github" />
              GitHub
            </a>
          </li>

          <li
            onClick={() =>
              setTimeout(() => {
                router.push("https://t.me/devUndeadCat");
              }, 300)
            }
          >
            <a>
              <i className="fa-brands fa-telegram" />
              Telegram
            </a>
          </li>
        </ul>
      </Main>
    </Container>
  );
}
export default CategoriesPage;
