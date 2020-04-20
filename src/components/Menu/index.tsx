import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { MdMoreHoriz } from 'react-icons/md';
import useClickOutside from 'hooks/useClickOutside';
import { Container, ActionMenu } from './styles';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function Menu({ children }: IProps) {
  const [open, setIsOpen] = useState(false);
  const menuRef = useRef();
  const { colors } = useContext(ThemeContext);

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
        <MdMoreHoriz size={22} color={colors.textMedium} />
      </button>

      <ActionMenu open={String(open)} ref={menuRef}>
        {children}
      </ActionMenu>
    </Container>
  );
}
