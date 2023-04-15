import { Container } from "./styles";
import { Tag } from "../Tags";
export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tag && (
        <footer>
          {data.tag.map((tags) => (
            <Tag key={tags.id} title={tags.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
