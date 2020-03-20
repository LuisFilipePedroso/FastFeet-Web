import styled from 'styled-components';

export const Container = styled.div``;

export const RecipientTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 21px;
`;

export const TableHeader = styled('th')<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  height: 50px;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  text-align: left;
  padding: 0 25px;
`;
