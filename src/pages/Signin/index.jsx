import { Background, Container, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {

  const data = useAuth();
  console.log(" meu contexto =>", data);
  
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar links úteis</p>

        <h2>Façca seu Login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
