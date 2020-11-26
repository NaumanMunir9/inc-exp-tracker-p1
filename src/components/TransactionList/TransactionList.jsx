import React from "react";
import Transaction from "./Transaction/Transaction";
import "./TransactionList.styles.css";

const TransactionList = () => {
  return (
    <div>
      <h4 className="transactionList-title">Transaction List</h4>
      <ul className="unordered-list">
        <Transaction />
      </ul>
    </div>
  );
};

export default TransactionList;
