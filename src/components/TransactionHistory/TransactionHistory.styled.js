import { styled } from 'styled-components';

export const Container = styled.table`
  width: 550px;
  margin: auto;
  margin-bottom: ${props => props.theme.spacing(10)}; //50px
  text-align: center;
  border: ${props => props.theme.borders.normal} #cfcfcf;
  border-radius: ${props => props.theme.radii.normal}; //4px
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const TransactionHead = styled.thead`
  background-color: #00bcd5;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const TransactionRow = styled.tr``;

export const Title = styled.th`
  padding: ${props => props.theme.spacing(2)}; //10px
`;

export const List = styled.tr`
  background-color: ${props => props.theme.colors.white};
  &:nth-child(2n) {
    background-color: #ecf1f3;
  }
`;

export const Item = styled.td`
  text-transform: capitalize;
  padding: ${props => props.theme.spacing(2)}; //10px
`;
