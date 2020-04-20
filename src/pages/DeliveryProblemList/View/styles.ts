import styled from 'styled-components';

export const Container = styled.div`
  > h4 {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 14px;
    margin-bottom: 4px;
  }

  > p {
    font-size: 16px;
    color: ${props => props.theme.colors.textPrimary};
  }
`;
