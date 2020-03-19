import styled from 'styled-components';

const Grid = styled('div')<{ width: string; flex?: string; column?: string }>`
  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  width: ${(props) => props.width};
  margin-bottom: 16px;
`;

export default Grid;
