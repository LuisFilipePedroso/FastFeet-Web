import React, { useState } from 'react';

import { MdMoreHoriz } from 'react-icons/md';
import { Container, ActionMenu } from './styles';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function Menu({ children }: IProps) {
  const [open, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!open);
  }

  return (
    <Container>
      <button type="button" onClick={handleOpenMenu}>
        <MdMoreHoriz size={22} />
      </button>

      <ActionMenu open={String(open)}>{children}</ActionMenu>
    </Container>
  );
}
