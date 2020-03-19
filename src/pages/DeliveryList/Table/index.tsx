import React, { useMemo, memo } from 'react';

import IDelivery from 'interfaces/Delivery';

import Status from 'utils/DeliveryStatus';
import ListItem from './ListItem';

import { Container, DeliveryTable, TableHeader } from './styles';

interface IProps {
  data: IDelivery[];
  reload: () => void;
}

function Table({ data, reload }: IProps) {
  const deliveries = useMemo(
    () =>
      data.map((delivery) => {
      const status = Status({
        startDate: delivery.start_date,
        endDate: delivery.end_date,
        canceledAt: delivery.canceled_at,
      });

      const acronymName = delivery.deliveryman.name
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), '');

      return {
        ...delivery,
        deliveryman: {
          ...delivery.deliveryman,
          acronymName: acronymName.replace(/[^A-Z]/g, ''),
        },
        status,
      };
    }),
    [data],
  );

  return (
    <Container>
      <DeliveryTable>
        <thead>
          <tr>
            <TableHeader width={70}>ID</TableHeader>
            <TableHeader width={250}>Destinatário</TableHeader>
            <TableHeader width={250}>Entregador</TableHeader>
            <TableHeader width={90}>Cidade</TableHeader>
            <TableHeader width={20}>Estado</TableHeader>
            <TableHeader width={100}>Status</TableHeader>
            <TableHeader width={100}>Ações</TableHeader>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <ListItem key={delivery.id} delivery={delivery} reload={reload} />
          ))}
        </tbody>
      </DeliveryTable>
    </Container>
  );
}

export default memo(Table);
