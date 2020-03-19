import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  width: 360px;
  height: 425px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000033;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 104px;

  img {
    margin-top: 60px;
    height: 44px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #444444;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 9px;
  }

  input {
    width: 100%;
    height: 45px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #999999;
    padding: 12px 15px 12px;
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  height: 45px;
  background-color: #7d40e7;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
