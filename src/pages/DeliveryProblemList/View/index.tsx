import React, { memo } from 'react';

import Modal from 'components/Modal';
import IDeliveryProblem from 'interfaces/DeliveryProblem';

import { Container } from './styles';

interface IProps {
  open: boolean;
  closeModal: () => void;
  deliveryProblem: IDeliveryProblem;
}

function View({ open, closeModal, deliveryProblem }: IProps) {
  return (
    <Modal open={open} closeModal={closeModal}>
      <Container>
        <h4>Problema</h4>

        <p>{deliveryProblem.description}</p>
      </Container>
    </Modal>
  );
}

export default memo(View);
