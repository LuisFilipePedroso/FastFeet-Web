import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';
import { signOut } from 'store/modules/auth/actions';
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
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <LogoContainer to="/deliveries">
        <img alt="Logo" src={Logo} />

        <div />
      </LogoContainer>

      <MenuList>
        {menu.map((m) => (
          <li key={m.title}>
            <Link to={m.path}>{m.title}</Link>
          </li>
        ))}
      </MenuList>

      <ProfileContainer>
        <h4>Admin FastFeet</h4>
        <button type="button" onClick={handleSignOut}>
          <p>Sair do sistema</p>
        </button>
      </ProfileContainer>
    </Container>
  );
}
