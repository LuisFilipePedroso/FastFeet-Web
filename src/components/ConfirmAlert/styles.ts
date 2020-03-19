import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  padding: 25px;
  background: #fff;
  border-radius: 4px;

  h1 {
    color: #444444;
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    color: #666666;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const CancelButton = styled.button`
  width: 110px;
  border: none;
  background-color: #cccccc;
  color: #fff;
  margin-right: 15px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  padding: 8px;
`;
export const ConfirmButton = styled(CancelButton)`
  background-color: #7d40e7;
`;
