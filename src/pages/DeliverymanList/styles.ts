import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled('div')<{ loading: string }>`
  width: 988px;
  height: calc(100% - 64px);
  margin: 0 auto;

  ${props => props.loading === 'true'
    && css`
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `};
`;
