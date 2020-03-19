import styled from 'styled-components';

export const Container = styled.tr`
  width: 100%;
  height: 57px;
  background-color: #fff;
  border-radius: 4px;

  td {
    padding: 0 25px;
    font-size: 16px;
    color: #666666;
  }
`;

export const DeliveryManInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f4effc;
    color: #a28fd0;
    font-size: 14px;
    font-weight: 500;
    padding: 7px;
    margin-right: 5px;
  }
`;
