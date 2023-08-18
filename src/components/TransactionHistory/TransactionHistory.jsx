import {
  Container,
  TransactionHead,
  TransactionRow,
  Title,
  List,
  Item,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <TransactionHead>
        <TransactionRow>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </TransactionRow>
      </TransactionHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <List key={id}>
            <Item>{type}</Item>
            <Item>{amount}</Item>
            <Item>{currency}</Item>
          </List>
        ))}
      </tbody>
    </Container>
  );
};

// <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>;
