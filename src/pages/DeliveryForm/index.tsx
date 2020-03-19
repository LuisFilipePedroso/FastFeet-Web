import React, { useState, useEffect, useRef } from 'react';

import FormHeader from 'components/FormHeader';
import FormCard from 'components/FormCard';
import Grid from 'components/Grid';
import Select from 'components/Select';
import Input from 'components/Input';
import { Form } from '@unform/web';
import history from 'services/history';
import api from 'services/api';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Delivery from 'interfaces/Delivery';
import DeliveryRepository from 'repositories/Delivery';
import { Container, GridContainer } from './styles';

export default function DeliveryForm() {
  const { id } = useParams();

  const [deliveryMans, setDeliveryMans] = useState();
  const [recipients, setRecipients] = useState();
  const [model, setModel] = useState<Delivery>(null);

  const formRef = useRef(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchData() {
      const response = await api.get(`/delivery/${id}`);
      setModel(response.data);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchRecipients() {
      const response = await api.get('/recipient');
      const recipientsOptions = response.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));
      setRecipients(recipientsOptions);
    }

    async function fetchDeliveryMan() {
      const response = await api.get('/deliveryman');
      const deliverymanOptions = response.data.map(deliveryMan => ({
        value: deliveryMan.id,
        label: deliveryMan.name,
      }));
      setDeliveryMans(deliverymanOptions);
    }

    fetchRecipients();
    fetchDeliveryMan();
  }, []);

  function handleBack() {
    history.goBack();
  }

  async function handleSubmit(data, { reset }) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        recipient_id: Yup.number().required(),
        deliveryman_id: Yup.number().required(),
        product: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await DeliveryRepository.update(data, Number(id));
        toast.success('Encomenda atualizada com sucesso!');
      } else {
        await DeliveryRepository.create(data);
        toast.success('Encomenda cadastrada com sucesso!');
      }

      history.push('/deliveries');
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={model}>
        <FormHeader
          title={id ? 'Edição de encomendas' : 'Cadastro de encomendas'}
          handleBack={handleBack}
        />
        <FormCard>
          <GridContainer>
            <Grid width="49%">
              <Select
                name="recipient_id"
                label="Destinatário"
                options={recipients}
              />
            </Grid>
            <Grid width="49%">
              <Select
                name="deliveryman_id"
                label="Entregador"
                options={deliveryMans}
              />
            </Grid>
          </GridContainer>
          <Grid flex="true" column="true" width="100%">
            <Input name="product" label="Nome do produto" />
          </Grid>
        </FormCard>
      </Form>
    </Container>
  );
}
