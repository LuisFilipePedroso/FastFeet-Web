import React, { useState, useEffect, useRef } from 'react';

import FormHeader from 'components/FormHeader';
import FormCard from 'components/FormCard';
import Grid from 'components/Grid';
import Input from 'components/Input';
import InputMask from 'components/InputMask';
import { Form } from '@unform/web';
import history from 'services/history';
import api from 'services/api';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Recipient from 'interfaces/Recipient';
import RecipientRepository from 'repositories/Recipient';
import { Container, GridContainer } from './styles';

export default function DeliveryForm() {
  const { id } = useParams();

  const [model, setModel] = useState<Recipient>(null);

  const formRef = useRef(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchData() {
      const response = await api.get(`/recipient/${id}`);
      setModel(response.data);
    }
    fetchData();
  }, [id]);

  function handleBack() {
    history.goBack();
  }

  async function handleSubmit(data, { reset }) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3)
          .max(155)
          .required(),
        street: Yup.string()
          .min(3)
          .max(155)
          .required(),
        number: Yup.number().required(),
        complement: Yup.string()
          .max(80)
          .required(),
        state: Yup.string()
          .max(2)
          .required(),
        city: Yup.string()
          .max(80)
          .required(),
        postal_code: Yup.string()
          .max(9)
          .required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await RecipientRepository.update(data, Number(id));
        toast.success('Destinatário atualizado com sucesso!');
      } else {
        await RecipientRepository.create(data);
        toast.success('Destinatário cadastrado com sucesso!');
      }

      history.push('/recipients');
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
          title={id ? 'Edição de destinatário' : 'Cadastro de destinatário'}
          handleBack={handleBack}
        />
        <FormCard>
          <Grid flex="true" column="true" width="100%">
            <Input name="name" label="Nome" />
          </Grid>
          <GridContainer>
            <Grid width="59%">
              <Input name="street" label="Rua" />
            </Grid>
            <Grid width="19%">
              <Input name="number" label="Número" />
            </Grid>
            <Grid width="19%">
              <Input name="complement" label="Complemento" />
            </Grid>
          </GridContainer>
          <GridContainer>
            <Grid width="32.33%">
              <Input name="city" label="Cidade" />
            </Grid>
            <Grid width="32.33%">
              <Input name="state" label="Estado" />
            </Grid>
            <Grid width="32.33%">
              <InputMask name="postal_code" label="CEP" mask="99999-999" />
            </Grid>
          </GridContainer>
        </FormCard>
      </Form>
    </Container>
  );
}
