import React from "react";
import "./Transaction.styles.css";

const Transaction = ({ transaction }) => {
  return (
    <div>
      <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.transaction} <span>PKR {transaction.amount}</span>
      </li>
    </div>
  );
};

export default Transaction;
