import React from 'react';

import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';
import { Container, LogoContainer, MenuList, ProfileContainer } from './styles';

const menu = [
  {
    title: 'Encomendas',
    path: '/deliveries',
  },
  {
    title: 'Entregadores',
    path: '/deliverymans',
  },
  {
    title: 'Destinatários',
    path: '/recipients',
  },
  {
    title: 'Problemas',
    path: '/problems',
  },
];

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <img alt="Logo" src={Logo} />

        <div />
      </LogoContainer>

      <MenuList>
        {menu.map(m => (
          <li key={m.title}>
            <Link to={m.path}>{m.title}</Link>
          </li>
        ))}
      </MenuList>

      <ProfileContainer>
        <h4>Admin FastFeet</h4>
        <p>Sair do sistema</p>
      </ProfileContainer>
    </Container>
  );
}
