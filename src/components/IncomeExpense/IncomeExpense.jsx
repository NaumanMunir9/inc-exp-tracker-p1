import React from "react";
import "./IncomeExpense.styles.css";

const IncomeExpense = () => {
  return (
    <div className="income-expense-container">
      <div className="income-div">
        <h3 className="income-title">Income</h3>
        <p className="income-amount">PKR +0.00</p>
      </div>

      <div className="expense-div">
        <h3 className="expense-title">Expense</h3>
        <p className="expense-amount">PKR -0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
