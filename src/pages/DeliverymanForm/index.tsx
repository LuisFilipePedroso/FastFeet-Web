import React, { useState, useEffect, useRef } from 'react';

import FormHeader from 'components/FormHeader';
import FormCard from 'components/FormCard';
import AvatarInput from 'components/AvatarInput';
import Input from 'components/Input';
import { Form } from '@unform/web';
import history from 'services/history';
import api from 'services/api';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import DeliveryMan from 'interfaces/DeliveryMan';
import DeliveryManRepository from 'repositories/DeliveryMan';
import { Container } from './styles';

export default function DeliveryManForm() {
  const { id } = useParams();

  const [model, setModel] = useState<DeliveryMan>(null);

  const formRef = useRef(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchData() {
      const response = await api.get(`/deliveryman/${id}`);
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
        name: Yup.string().required(),
        email: Yup.string()
          .email()
          .required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await DeliveryManRepository.update(data, Number(id));
      } else {
        await DeliveryManRepository.create(data);
      }

      toast.success('Encomenda cadastrada com sucesso!');

      history.push('/deliverymans');
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
        <FormHeader title="Cadastro de entregadores" handleBack={handleBack} />
        <FormCard>
          <AvatarInput name="avatar_id" className="avatar" />
          <Input name="name" label="Nome" />
          <Input name="email" label="Email" />
        </FormCard>
      </Form>
    </Container>
  );
}
