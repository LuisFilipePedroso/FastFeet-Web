import React from 'react';

import { Form } from '@unform/web';

import Input from 'components/Input';

import Logo from 'assets/logo.png';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  InputWrapper,
  SubmitButton,
} from './styles';

export default function SignIn() {
  function handleSubmit(data, { reset }) {
    console.log(data);
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <img alt="FastFeet Logo" src={Logo} />
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="email">Seu E-mail</label>
              <Input type="text" name="email" id="email" />
            </InputWrapper>
            <InputWrapper>
              <label>Sua senha</label>
              <Input type="password" name="password" />
            </InputWrapper>

            <SubmitButton>Entrar no sistema</SubmitButton>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}
