import React, { useContext } from "react";
import { TransactionContext } from "../../../context/TransactionContext";
import "./Transaction.styles.css";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  return (
    <div>
      <li
        onClick={() => deleteTransaction(transaction.id)}
        className={transaction.amount > 0 ? "plus" : "minus"}
      >
        {transaction.transaction} <span>PKR {transaction.amount}</span>
      </li>
    </div>
  );
};

export default Transaction;
