import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { MdChevronLeft, MdDone } from 'react-icons/md';
import { Container, ButtonsWrapper, BackButton, SubmitButton } from './styles';

interface IProps {
  title: string;
  handleBack: () => void;
}

export default function FormHeader({ title, handleBack }: IProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <h2>{title}</h2>

      <ButtonsWrapper>
        <BackButton type="button" onClick={handleBack}>
          <MdChevronLeft size={24} color="#fff" />
          Voltar
        </BackButton>
        <SubmitButton>
          <MdDone size={24} color={colors.secondary} />
          Salvar
        </SubmitButton>
      </ButtonsWrapper>
    </Container>
  );
}
