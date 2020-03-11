import React from 'react';

import { MdEdit } from 'react-icons/md';

import { Container } from './styles';

export default function ViewButton() {
  return (
    <Container>
      <MdEdit color="#4D85EE" size={20} />
      Editar
    </Container>
  );
}
