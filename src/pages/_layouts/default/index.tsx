import React from 'react';

import { Wrapper } from './styles';

interface IProps {
  children: JSX.Element;
}

export default function DefaultLayout(props: IProps) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
}
