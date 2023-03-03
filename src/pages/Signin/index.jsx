import { Background, Container, Form } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Signin() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar links úteis</p>

        <h2>Façca seu Login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="#">
          Criar conta
          </a>
      </Form>
      <Background />
    </Container>
  );
}
