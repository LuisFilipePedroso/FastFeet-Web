import React from 'react';

import { Container } from './styles';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function FormCard({ children }: IProps) {
  return <Container>{children}</Container>;
}
