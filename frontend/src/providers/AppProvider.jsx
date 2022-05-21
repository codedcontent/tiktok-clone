import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export const AppProvider = ({ reducer, initialState, children }) => {
  const [appState, appDispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
