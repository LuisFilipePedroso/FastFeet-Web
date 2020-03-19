import React, { useState, useEffect } from 'react';

import TableHeader from 'components/TableHeader';

import IDeliveryMan from 'interfaces/DeliveryMan';
import DeliveryManRepository from 'repositories/DeliveryMan';
import { AiOutlineLoading } from 'react-icons/ai';
import Table from './Table';
import { Container } from './styles';

export default function DeliverymanList() {
  const [deliveryMan, setDeliveryMan] = useState<IDeliveryMan[]>();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');

  async function fetchData(filter?: string) {
    const data = await DeliveryManRepository.findAll(filter);
    setDeliveryMan(data);
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
            title="entregadores"
            path="/deliveryman"
            value={value}
            handleChange={handleChange}
          />
          <Table data={deliveryMan} reload={fetchData} />
        </>
      )}
    </Container>
  );
}
