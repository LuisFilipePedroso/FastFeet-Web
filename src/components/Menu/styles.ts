import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: none;
    border: none;
  }
`;

export const ActionMenu = styled('ul')<{ open: string }>`
  display: ${props => (props.open === 'true' ? 'flex' : 'none')};

  li {
    & + li {
      border-top: 1px solid #eeeeee;
      margin-top: 10px;
      padding-top: 10px;
    }
  }

  ${props => props.open === 'true'
    && css`
      min-width: 120px;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 0px 0px 2px #00000026;
      position: absolute;
      margin-top: 35px;
      padding: 15px 5px;

      &::before {
        content: '';
        position: absolute;
        left: calc(50% - 7px);
        top: -10px;
        height: 0;
        width: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 10px solid #0000000d;
      }
    `}
`;
