import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/pedronnsm.png" alt="foto do usuario" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placegolder="Nome" type="text" icon={FiUser} />
        <Input placegolder="E-Mail" type="text" icon={FiMail} />
        <Input placegolder="Senha atual" type="password" icon={FiLock} />
        <Input placegolder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
<Button title="Salvar" />;
