import React, { useState, useEffect } from 'react';

import TableHeader from 'components/TableHeader';

import IDelivery from 'interfaces/Delivery';
import DeliveryRepository from 'repositories/Delivery';
import { AiOutlineLoading } from 'react-icons/ai';
import Table from './Table';
import { Container } from './styles';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState<IDelivery[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await DeliveryRepository.findAll();
      setDeliveries(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container loading={String(loading)}>
      {loading === true ? (
        <AiOutlineLoading size={35} color="#7D40E7" />
      ) : (
        <>
          <TableHeader title="encomendas" />
          <Table data={deliveries} />
        </>
      )}
    </Container>
  );
}
