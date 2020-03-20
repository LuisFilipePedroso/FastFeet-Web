import React from 'react';

import { Container } from './styles';

interface IProps {
  backgroundLight: string;
  backgroundDark: string;
  children: JSX.Element | JSX.Element[];
}

export default function DeliveryStatus({
  backgroundLight,
  backgroundDark,
  children,
}: IProps) {
  return (
    <Container
      backgroundLight={backgroundLight}
      backgroundDark={backgroundDark}
    >
      {children}
    </Container>
  );
}
