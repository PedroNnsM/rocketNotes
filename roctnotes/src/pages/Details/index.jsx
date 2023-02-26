import { Button } from "../../components/Button/index.jsx";
import { Container } from "./styles.js";

export function Details() {
  return (
    <Container>
      <h1> Hello World </h1>

      <Button title="Entra" loading />
      <Button title="Cadastra" />
      <Button title="Voltar" />
    </Container>
  );
}
