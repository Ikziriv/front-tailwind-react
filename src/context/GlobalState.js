import React, { useReducer, createContext } from "react";
import AppReducer from "../Reducer/AppReducer";
import axios from "axios";
// Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);
// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action Get
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "ERROR_TRANS",
        payload: err.response.data.error,
      });
    }
  }
  // Actions Delete
  async function deletedTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({ type: "DELETED_TRANS", payload: id });
    } catch (err) {
      dispatch({
        type: "ERROR_TRANS",
        payload: err.response.data.error,
      });
    }
  }

  // Actions Add
  async function addTransaction(transaction) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({ type: "ADDED_TRANS", payload: res.data.data });
    } catch (err) {
      dispatch({
        type: "ERROR_TRANS",
        payload: err.response.data.error,
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deletedTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
