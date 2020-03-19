import React, { useState, useEffect } from 'react';

import TableHeader from 'components/TableHeader';

import IDelivery from 'interfaces/Delivery';
import DeliveryRepository from 'repositories/Delivery';
import { AiOutlineLoading } from 'react-icons/ai';
import Table from './Table';
import { Container } from './styles';

export default function DeliveryList() {
  const [deliveries, setDeliveries] = useState<IDelivery[]>();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');

  async function fetchData(filter?: string) {
    const data = await DeliveryRepository.findAll(filter);
    setDeliveries(data);
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
            title="encomendas"
            path="/delivery"
            value={value}
            handleChange={handleChange}
          />
          <Table data={deliveries} reload={fetchData} />
        </>
      )}
    </Container>
  );
}
