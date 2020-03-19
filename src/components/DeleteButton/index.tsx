import React from 'react';

import { MdDeleteForever } from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  onClick: () => any;
  text?: string;
}

export default function ViewButton({ onClick, text = 'Excluir' }: IProps) {
  return (
    <Container onClick={onClick}>
      <MdDeleteForever color="#DE3B3B" size={20} />
      {text}
    </Container>
  );
}
