import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app/App";
import "./styles.css";
import Header from "./app/header/Header";
import ForYouPage from "./app/forYouPage/ForYouPage";

const LargeApp = () => {
  return (
    <div className="largeApp__root">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<ForYouPage />} />
          </Route>
          <Route path="invoices" element={<h1>Invoices</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LargeApp;
