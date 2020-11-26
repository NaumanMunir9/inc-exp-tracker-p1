import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import "./IncomeExpense.styles.css";

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((accumulate, amount) => (accumulate += amount), 0)
    .toFixed(0);

  const expense = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((accumulate, amount) => (accumulate += amount), 0) * -1
  ).toFixed(0);

  return (
    <div className="income-expense-container">
      <div className="income-div">
        <h3 className="income-title">Income</h3>
        <p className="income-amount">PKR +{income}</p>
      </div>

      <div className="expense-div">
        <h3 className="expense-title">Expense</h3>
        <p className="expense-amount">PKR -{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
