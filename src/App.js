import React from "react";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;
