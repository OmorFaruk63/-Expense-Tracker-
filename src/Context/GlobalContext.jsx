import { createContext, useEffect, useReducer } from "react";

import { reducer_func } from "./../hooks/reducer_func";

export const GlobalContext = createContext();

const initialValue = {
  transaction: [],
};

const GlobalProvaider = ({ children }) => {
  // useReducer Hook
  const [state, dispatch] = useReducer(
    reducer_func,
    JSON.parse(localStorage.getItem("transactionList")) || initialValue
  );

  localStorage.setItem("transactionList", JSON.stringify(state));

  // localStorage.clear();
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
