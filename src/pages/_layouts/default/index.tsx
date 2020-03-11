import React from 'react';

import Header from 'components/Header';

import { Wrapper } from './styles';

interface IProps {
  children: JSX.Element;
}

export default function DefaultLayout(props: IProps) {
  const { children } = props;

  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
