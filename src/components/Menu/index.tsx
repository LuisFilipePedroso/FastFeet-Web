import React, { useState, useRef } from 'react';

import { MdMoreHoriz } from 'react-icons/md';
import useClickOutside from 'hooks/useClickOutside';
import { Container, ActionMenu } from './styles';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function Menu({ children }: IProps) {
  const [open, setIsOpen] = useState(false);
  const menuRef = useRef();

  function handleOpenMenu() {
    setIsOpen(!open);
  }

  useClickOutside(menuRef, () => {
    if (open) {
      setIsOpen(false);
    }
  });

  return (
    <Container>
      <button type="button" onClick={handleOpenMenu}>
        <MdMoreHoriz size={22} />
      </button>

      <ActionMenu open={String(open)} ref={menuRef}>
        {children}
      </ActionMenu>
    </Container>
  );
}
