import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Transaction from "./Transaction/Transaction";
import "./TransactionList.styles.css";

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h3 className="transactionList-title">Transaction List</h3>
      <ul className="unordered-list">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
