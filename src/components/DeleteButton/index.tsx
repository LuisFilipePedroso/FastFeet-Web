import React from 'react';

import { MdDeleteForever } from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  onClick: () => any;
}

export default function ViewButton({ onClick }: IProps) {
  return (
    <Container onClick={onClick}>
      <MdDeleteForever color="#4D85EE" size={20} />
      Excluir
    </Container>
  );
}
