import { Container, Links } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tags/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="https://www.rockeseat.com.br">
              https://www.rockeseat.com.br
            </a>
          </li>
          <li>
            <a href="https://www.rockeseat.com.br">
              https://www.rockeseat.com.br
            </a>
          </li>
        </Links>
      </Section>

      <Section title='Marcadores '>
        <Tag title='React' />
        <Tag title='NodeJS' />
        <Tag title='Express' />
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}
