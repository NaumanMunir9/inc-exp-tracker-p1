import React from "react";
import Transaction from "./Transaction/Transaction";

const TransactionList = () => {
  return (
    <div>
      <h4>Transaction List</h4>
      <ul>
        <Transaction />
      </ul>
    </div>
  );
};

export default TransactionList;
