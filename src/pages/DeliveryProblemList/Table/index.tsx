import React, { useMemo, memo } from 'react';

import IDeliveryProblem from 'interfaces/DeliveryProblem';

import ListItem from './ListItem';

import { Container, DeliveryTable, TableHeader } from './styles';

interface IProps {
  data: IDeliveryProblem[];
  reload: () => void;
}

function Table({ data, reload }: IProps) {
  return (
    <Container>
      <DeliveryTable>
        <thead>
          <tr>
            <TableHeader width={100}>Encomenda</TableHeader>
            <TableHeader width={600}>Problema</TableHeader>
            <TableHeader width={250} textAlign="center">
              Ações
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map(deliveryProblem => (
            <ListItem
              key={deliveryProblem.id}
              deliveryProblem={deliveryProblem}
              reload={reload}
            />
          ))}
        </tbody>
      </DeliveryTable>
    </Container>
  );
}

export default memo(Table);
