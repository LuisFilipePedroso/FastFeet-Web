import React, { useState, useEffect } from 'react';

import TableHeader from 'components/TableHeader';

import IRecipient from 'interfaces/Recipient';
import RecipientRepository from 'repositories/Recipient';
import { AiOutlineLoading } from 'react-icons/ai';
import Table from './Table';
import { Container } from './styles';

export default function DeliveryList() {
  const [recipients, setRecipients] = useState<IRecipient[]>();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');

  async function fetchData(filter?: string) {
    const data = await RecipientRepository.findAll(filter);
    setRecipients(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange({ target }) {
    fetchData(target.value);
    setValue(target.value);
  }

  return (
    <Container loading={String(loading)}>
      {loading === true ? (
        <AiOutlineLoading size={35} color="#7D40E7" />
      ) : (
        <>
          <TableHeader
            title="Gerenciando destinatários"
            path="/recipient"
            value={value}
            handleChange={handleChange}
          />
          <Table data={recipients} reload={fetchData} />
        </>
      )}
    </Container>
  );
}
