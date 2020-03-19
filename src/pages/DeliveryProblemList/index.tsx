import React, { useState, useEffect } from 'react';

import TableHeader from 'components/TableHeader';

import IDeliveryProblem from 'interfaces/DeliveryProblem';
import DeliveryProblemRepository from 'repositories/DeliverProblem';
import { AiOutlineLoading } from 'react-icons/ai';
import Table from './Table';
import { Container } from './styles';

export default function DeliveryList() {
  const [deliveryProblem, setDeliveryProblem] = useState<IDeliveryProblem[]>();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');

  async function fetchData() {
    const data = await DeliveryProblemRepository.findAll();
    setDeliveryProblem(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container loading={String(loading)}>
      {loading === true ? (
        <AiOutlineLoading size={35} color="#7D40E7" />
      ) : (
        <>
          <TableHeader
            title="Problemas na entrega"
            path="/delivery-problems"
            value={value}
            search={false}
            addButton={false}
          />
          <Table data={deliveryProblem} reload={fetchData} />
        </>
      )}
    </Container>
  );
}
