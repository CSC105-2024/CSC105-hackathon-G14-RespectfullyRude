import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
