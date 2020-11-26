import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

const initialState = {
  transactions: [
    {
      id: 1,
      transaction: "Salary",
      amount: 500,
    },
    {
      id: 2,
      transaction: "Cheese",
      amount: -200,
    },
    {
      id: 3,
      transaction: "Bread",
      amount: -100,
    },
  ],
};

export const TransactionContext = createContext(initialState);

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <TransactionContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
