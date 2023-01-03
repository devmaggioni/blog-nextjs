import { Container } from "./styles";

function Layout({ pathname, buttonText, id }) {
  return (
    <Container id={id}>
      <form action={"/api/" + pathname} method="post">
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="name" />
        </div>

        <div>
          <label htmlFor="msg">Mensagem:</label>
          <textarea id="msg" name="text"></textarea>
        </div>

        <button type="submit">{buttonText || "Enviar sua mensagem"}</button>
      </form>
    </Container>
  );
}

export default Layout;
