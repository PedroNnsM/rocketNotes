import { Container, Form } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input placegolder="Nome" type="text" icon={FiUser} />
        <Input placegolder="E-Mail" type="text" icon={FiMail} />
        <Input placegolder="Senha atual" type="password" icon={FiLock} />
        <Input placegolder="Nova senha" type="password" icon={FiLock} />
        <Button title='Salvar' />
      </Form>
    </Container>
  );
}
<Button title="Salvar" />;
