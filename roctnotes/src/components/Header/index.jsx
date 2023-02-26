import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/pedronnsm.png" alt="Foto do usuario" />

        <div>
          <span>Bem vindo,</span>
          <strong>Pedro Nunes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
