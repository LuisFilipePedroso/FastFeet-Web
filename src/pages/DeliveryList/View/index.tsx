import React, { useMemo, memo } from 'react';

import Modal from 'components/Modal';
import IDelivery from 'interfaces/Delivery';
import { formatDateWithDate } from 'utils/FormatDate';

import { Container, Grid, ImageWrapper } from './styles';

interface IProps {
  open: boolean;
  closeModal: () => void;
  delivery: IDelivery;
}

function View({ open, closeModal, delivery }: IProps) {
  const formattedStartDate = useMemo(
    () => delivery.start_date && formatDateWithDate(String(delivery.start_date)),
    [delivery.start_date]
  );
  const formattedEndDate = useMemo(
    () => delivery.end_date && formatDateWithDate(String(delivery.end_date)),
    [delivery.end_date]
  );

  return (
    <Modal open={open} closeModal={closeModal}>
      <Container>
        <h4>Informações da encomenda</h4>

        <Grid>
          <p>
            {delivery.recipient.street}, {delivery.recipient.number}
          </p>
          <p>
            {delivery.recipient.city} - {delivery.recipient.state}
          </p>
          <p>{delivery.recipient.postal_code}</p>
        </Grid>

        <h4>Datas</h4>
        <Grid>
          <p>
            <span>Retirada:</span> {formattedStartDate}
          </p>
          <p>
            <span>Entrega:</span> {formattedEndDate}
          </p>
        </Grid>

        {delivery?.signature?.url && (
          <>
            <h4>Assinatura do destinatário</h4>
            <ImageWrapper>
              <img alt="Signature" src={delivery.signature.url} height="100" />
            </ImageWrapper>
          </>
        )}
      </Container>
    </Modal>
  );
}

export default memo(View);
