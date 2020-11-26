import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import "./Balance.styles.css";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((accumulate, amount) => (accumulate += amount), 0)
    .toFixed(0);

  return (
    <div>
      <h2 className="totalBalance-text">Total Balance</h2>
      <h2 className="totalBalance-amount">PKR {total}</h2>
    </div>
  );
};

export default Balance;
