import { Container, Links, Content } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tags/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          
          <h1>
            Introdução ao React
          </h1>

          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nam possimus, voluptates consectetur itaque similique vero corporis veniam sapiente pariatur explicabo ipsam consequatur culpa eum unde expedita? Hic, minima rem!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nam possimus, voluptates consectetur itaque similique vero corporis veniam sapiente pariatur explicabo ipsam consequatur culpa eum unde expedita? Hic, minima rem!
          </p>
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

          <Section title="Marcadores ">
            <Tag title="React" />
            <Tag title="NodeJS" />
            <Tag title="Express" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
