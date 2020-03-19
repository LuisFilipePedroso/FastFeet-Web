import React from 'react';

import { MdChevronLeft, MdDone } from 'react-icons/md';
import { Container, ButtonsWrapper, BackButton, SubmitButton } from './styles';

interface IProps {
  title: string;
  handleBack: () => void;
}

export default function FormHeader({ title, handleBack }: IProps) {
  return (
    <Container>
      <h2>{title}</h2>

      <ButtonsWrapper>
        <BackButton onClick={handleBack}>
          <MdChevronLeft size={24} color="#fff" />
          Voltar
        </BackButton>
        <SubmitButton>
          <MdDone size={24} color="#fff" />
          Salvar
        </SubmitButton>
      </ButtonsWrapper>
    </Container>
  );
}
