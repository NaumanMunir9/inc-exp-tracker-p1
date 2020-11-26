import React from "react";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import "./App.css";
import TransactionProvider from "./context/TransactionContext";

const App = () => {
  return (
    <div>
      <TransactionProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </TransactionProvider>
    </div>
  );
};

export default App;
