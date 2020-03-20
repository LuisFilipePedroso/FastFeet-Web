import styled from 'styled-components';

export const Container = styled('div')<{
  backgroundLight: string;
  backgroundDark: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 27px;
  border-radius: 12px;
  background-color: ${(props) => props.backgroundLight};

  > span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundDark};
    margin-right: 6px;
  }

  > p {
    display: flex;
    align-items: center;
    color: ${(props) => props.backgroundDark};
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
