import React from 'react';

import { MdVisibility } from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  onClick: () => any;
}

export default function ViewButton({ onClick }: IProps) {
  return (
    <Container onClick={onClick}>
      <MdVisibility color="#8E5BE8" size={20} />
      Visualizar
    </Container>
  );
}
