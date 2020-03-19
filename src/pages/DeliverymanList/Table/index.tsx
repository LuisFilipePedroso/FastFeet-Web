import React, { useMemo, memo } from 'react';

import IDeliveryMan from 'interfaces/DeliveryMan';

import ListItem from './ListItem';

import { Container, DeliveryTable, TableHeader } from './styles';

interface IProps {
  data: IDeliveryMan[];
  reload: () => void;
}

function Table({ data, reload }: IProps) {
  const deliveryMan = useMemo(
    () =>
      data.map((deliveryMan) => {
      const acronymName = deliveryMan.name
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), '');

      return {
        ...deliveryMan,
        acronymName: acronymName.replace(/[^A-Z]/g, ''),
      };
    }),
    [data],
  );

  return (
    <Container>
      <DeliveryTable>
        <thead>
          <tr>
            <TableHeader width={110}>ID</TableHeader>
            <TableHeader width={130}>Foto</TableHeader>
            <TableHeader width={300}>Nome</TableHeader>
            <TableHeader width={350}>Email</TableHeader>
            <TableHeader width={100}>Ações</TableHeader>
          </tr>
        </thead>
        <tbody>
          {deliveryMan.map(d => (
            <ListItem key={d.id} deliveryMan={d} reload={reload} />
          ))}
        </tbody>
      </DeliveryTable>
    </Container>
  );
}

export default memo(Table);
