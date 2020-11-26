import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

const initialState = {
  transactions: [],
};

export const TransactionContext = createContext(initialState);

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
