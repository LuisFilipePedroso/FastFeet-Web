import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import Switch from 'react-switch';
import { ThemeContext as GlobalContext } from 'styled-components';

import { ThemeContext } from 'context/Theme';

import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';
import { signOut } from 'store/modules/auth/actions';
import {
  Container,
  LogoContainer,
  MenuList,
  ProfileContainer,
  SwitchWrapper,
} from './styles';

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
  const { colors, title } = useContext(GlobalContext);
  const { toggleTheme } = useContext(ThemeContext);

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

      <ProfileContainer title={title}>
        <h4>Admin FastFeet</h4>
        <button type="button" onClick={handleSignOut}>
          <p>Sair do sistema</p>
        </button>
      </ProfileContainer>

      <SwitchWrapper>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          onHandleColor={colors.actionButtonLight}
          offHandleColor={colors.primary}
          offColor={colors.actionButtonLight}
          onColor={colors.secondary}
        />
      </SwitchWrapper>
    </Container>
  );
}
