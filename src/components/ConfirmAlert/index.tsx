import React from 'react';

import {
  Container,
  ButtonsWrapper,
  CancelButton,
  ConfirmButton,
} from './styles';

interface IProps {
  onClose: () => void;
  onConfirm: () => void;
  infoMessage?: string;
}

export default function ConfirmAlert({
  onClose,
  onConfirm,
  infoMessage = 'Deseja deletar este item?',
}: IProps) {
  function handleConfirm() {
    onConfirm();
    onClose();
  }

  return (
    <Container>
      <h1>Tem certeza?</h1>
      <p>{infoMessage}</p>

      <ButtonsWrapper>
        <CancelButton onClick={onClose}>Não</CancelButton>
        <ConfirmButton onClick={handleConfirm}>Sim</ConfirmButton>
      </ButtonsWrapper>
    </Container>
  );
}
