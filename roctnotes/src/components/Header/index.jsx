import { Container, Profile } from "./styles";

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
    </Container>
  );
}
