import styled from 'styled-components';

export const Container = styled.div``;

export const DeliveryTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 21px;
`;

export const TableHeader = styled('th')<{ width: number; textAlign?: string }>`
  width: ${(props) => `${props.width}px`};
  height: 50px;
  font-size: 16px;
  color: #444444;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  padding: 0 25px;
`;
