import React from 'react';

import { Wrapper } from './styles';

interface IProps {
  children: JSX.Element;
}

export default function AuthLayout(props: IProps) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
}
