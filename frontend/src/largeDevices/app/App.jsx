import React from "react";
import { Outlet } from "react-router-dom";
import LoginOverlay from "../../common/components/loginOverlay/LoginOverlay";
import { useAppState } from "../../providers/AppProvider";
import "./styles.css";

const App = () => {
  const {
    appState: { showLoginOverlay },
  } = useAppState();

  return (
    <div className="largeApp__appRoot">
      <Outlet />

      {showLoginOverlay && <LoginOverlay />}
    </div>
  );
};

export default App;
