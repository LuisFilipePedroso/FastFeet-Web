import React, { useMemo, memo } from 'react';

import IRecipient from 'interfaces/Recipient';

import ListItem from './ListItem';

import { Container, RecipientTable, TableHeader } from './styles';

interface IProps {
  data: IRecipient[];
  reload: () => void;
}

function Table({ data, reload }: IProps) {
  const recipients = useMemo(
    () =>
      data.map((d) => {
      const address = `${d.street}, ${d.number}, ${d.city}, ${d.state}`;

      return {
        ...d,
        address,
      };
    }),
    [data],
  );

  return (
    <Container>
      <RecipientTable>
        <thead>
          <tr>
            <TableHeader width={120}>ID</TableHeader>
            <TableHeader width={400}>Nome</TableHeader>
            <TableHeader width={400}>Endereço</TableHeader>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <ListItem
              key={recipient.id}
              recipient={recipient}
              reload={reload}
            />
          ))}
        </tbody>
      </RecipientTable>
    </Container>
  );
}

export default memo(Table);
