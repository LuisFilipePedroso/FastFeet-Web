import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from 'store/modules/auth/actions';

import { Form } from '@unform/web';
import Input from 'components/Input';

import * as Yup from 'yup';

import Logo from 'assets/logo.png';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  InputWrapper,
  SubmitButton,
} from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6)
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  async function handleSubmit(data, { reset }) {
    try {
      formRef.current.setErrors({});
      await schema.validate(data, {
        abortEarly: false,
      });

      const { email, password } = data;

      dispatch(signInRequest(email, password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <img alt="FastFeet Logo" src={Logo} />
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <InputWrapper>
              <label htmlFor="email">Seu E-mail</label>
              <Input type="text" name="email" id="email" />
            </InputWrapper>
            <InputWrapper>
              <label>Sua senha</label>
              <Input type="password" name="password" id="password" />
            </InputWrapper>

            <SubmitButton>
              {loading ? 'Carregando...' : 'Entrar no sistema'}
            </SubmitButton>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}
