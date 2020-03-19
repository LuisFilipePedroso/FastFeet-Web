import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin-top: 34px;

  > h3 {
    color: #444444;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 85% 15%;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 142px;
  height: 36px;
  background-color: #7d40e7;
  border-radius: 4px;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;

  svg {
    margin-right: 7px;
    font-weight: bold;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 237px;
  margin-bottom: 15px;
  margin-top: 34px;

  svg {
    position: absolute;
    margin-left: 16px;
  }

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #dddddd;
    font-size: 14px;
    color: #999999;
    font-weight: 500;
    padding-left: 46px;
  }
`;
