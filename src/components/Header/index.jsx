import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  const {signOut} = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/pedronnsm.png" alt="Foto do usuario" />

        <div>
          <span>Bem vindo,</span>
          <strong>Pedro Nunes</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
