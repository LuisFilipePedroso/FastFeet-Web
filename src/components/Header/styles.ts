import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 66% 15% 5%;
  height: 64px;
  padding: 0 15px;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;

  > div {
    width: 2px;
    height: 32px;
    background-color: ${(props) => props.theme.colors.secondaryBackground};
  }

  > img {
    height: 26px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-left: 15px;

    a {
      color: ${props => props.theme.colors.textSecondary};
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const ProfileContainer = styled('div')<{ title: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h4 {
    color: ${(props) =>
      props.title === 'dark'
        ? props.theme.colors.textSecondary
        : props.theme.colors.textMedium};
    font-size: 14px;
  }

  > button {
    border: none;
    background: none;

    p {
      color: ${props => props.theme.colors.secondaryDanger};
      font-weight: 500;
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
