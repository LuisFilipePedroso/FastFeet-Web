import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  width: 100%;
  margin-top: 27px;

  h2 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 36px;
  background-color: #cccccc;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;

  svg {
    margin-right: 6px;
  }
`;

export const SubmitButton = styled(BackButton).attrs({
  type: 'submit',
})`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
`;
