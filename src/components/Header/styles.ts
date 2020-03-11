import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 75% 10%;
  height: 64px;
  padding: 0 15px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > div {
    width: 2px;
    height: 32px;
    background-color: #dddd;
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
      color: #999999;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: #666666;
    font-size: 14px;
  }

  p {
    color: #de3b3b;
    font-weight: 500;
    font-size: 14px;
    margin-top: 5px;
  }
`;
