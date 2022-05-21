import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./providers/AppProvider";
import { UserProvider } from "./providers/UserProvider";
import AppReducer, { initialAppState } from "./reducers/appReducer";
import UserReducer, { initialUserState } from "./reducers/userReducer";
import "./firebase/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider initialState={initialAppState} reducer={AppReducer}>
      <UserProvider initialState={initialUserState} reducer={UserReducer}>
        <App />
      </UserProvider>
    </AppProvider>
  </React.StrictMode>
);
