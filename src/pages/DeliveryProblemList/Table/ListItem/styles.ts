import styled from 'styled-components';

export const Container = styled.tr`
  width: 100%;
  height: 57px;
  background-color: ${(props) => props.theme.colors.primaryBackgroundTable};
  border-radius: 4px;

  td {
    padding: 0 25px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.textMedium};
  }
`;
