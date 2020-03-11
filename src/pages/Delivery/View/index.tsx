import React from 'react';

import Modal from 'components/Modal';

import IDelivery from 'interfaces/Delivery';

interface IProps {
  open: boolean;
  closeModal: () => void;
  delivery: IDelivery;
}

export default function View({ open, closeModal, delivery }: IProps) {
  return (
    <Modal open={open} closeModal={closeModal}>
      <h4>Informações da encomenda</h4>
      <p>
        {delivery.recipient.street}, {delivery.recipient.number}
      </p>
      <p>
        {delivery.recipient.city} - {delivery.recipient.state}
      </p>
      <p>{delivery.recipient.postal_code}</p>

      <h4>Datas</h4>
      <p>
        <span>Retirada:</span> {delivery.start_date}
      </p>
      <p>
        <span>Entrega:</span> {delivery.end_date}
      </p>

      {delivery?.signature?.url && (
        <>
          <h4>Assinatura do destinatário</h4>
          <img alt="Signature" src={delivery.signature.url} height="100" />
        </>
      )}
    </Modal>
  );
}
