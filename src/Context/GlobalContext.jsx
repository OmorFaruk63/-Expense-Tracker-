import { createContext, useEffect, useReducer } from "react";
import { reducer_func } from "../reducer/reducer_func";

export const GlobalContext = createContext();

const initialValue = {
  transaction: JSON.parse(localStorage.getItem("transactionList")) || [],
};

const GlobalProvaider = ({ children }) => {
  // useReducer Hook
  const [state, dispatch] = useReducer(reducer_func, initialValue);

  useEffect(() => {
    state.transaction.length >= 1 &&
      localStorage.setItem(
        "transactionList",
        JSON.stringify(state.transaction)
      );
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvaider;
