import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./components/layout/MainLayout";
import IndividualProfile from "./pages/IndividualProfile";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="profile/:id" element={<IndividualProfile />} />
          <Route path="create/:id" element={<CreatePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
