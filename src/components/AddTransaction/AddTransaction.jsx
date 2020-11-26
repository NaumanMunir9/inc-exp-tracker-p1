import React, { useContext, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { v4 as uuid } from "uuid";
import "./AddTransaction.styles.css";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      transaction,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3 className="addTransaction-title">Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label className="addTransaction-label" htmlFor="text">
            Transaction
          </label>
          <input
            className="input-text"
            type="text"
            placeholder="Enter Transaction"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
          />
        </div>

        <div>
          <label className="addAmount-label" htmlFor="amount">
            Amount
          </label>
          <input
            className="input-amount"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="addTransaction-button">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
