import React from 'react';

import { MdEdit } from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  onClick: () => any;
}

export default function EditButton({ onClick }: IProps) {
  return (
    <Container onClick={onClick}>
      <MdEdit color="#4D85EE" size={20} />
      Editar
    </Container>
  );
}
