import styled from 'styled-components';

export const Container = styled.div`
  > h4 {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

export const Grid = styled.div`
  margin-top: 8px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eeeeee;

  p {
    color: ${(props) => props.theme.colors.textMedium};
    font-size: 16px;
    margin-bottom: 12px;

    span {
      font-weight: bold;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
