import React from 'react';

import { MdDeleteForever } from 'react-icons/md';

import { Container } from './styles';

export default function ViewButton() {
  return (
    <Container>
      <MdDeleteForever color="#4D85EE" size={20} />
      Excluir
    </Container>
  );
}
