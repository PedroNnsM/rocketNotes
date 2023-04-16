import { useEffect, useState } from "react";
import { Container, Links, Content } from "./styles.js";
import { useParams } from "react-router-dom";

import { Button } from "../../components/Button/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tags/index.jsx";
import { api } from "../../services/api.js";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  // Ajustar err com as notas 
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      console.log(response.data)
      setData(response.data);

    }
    fetchNote();
    
  }, []);
  return (
    <Container>
      <Header />

      {data && 
        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>{data.title}</h1>

            <p>{data.description}</p>
            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url}>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores ">
                {data.tag.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" />
          </Content>
        </main>
      }
    </Container>
  );
}
