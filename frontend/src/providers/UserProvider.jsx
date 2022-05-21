import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

export const UserProvider = ({ reducer, initialState, children }) => {
  const [user, userDispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => useContext(UserContext);
