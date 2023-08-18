import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
