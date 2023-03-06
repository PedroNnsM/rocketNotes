import { Container } from "./styles";

import { FiPlus, Fix } from "react-icons/fi";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <Fix />}
      </button>
    </Container>
  );
}
