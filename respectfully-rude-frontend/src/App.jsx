import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./components/layout/MainLayout";
import IndividualProfile from "./pages/IndividualProfile";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { Toaster } from "sonner";
import { useFetch } from "./hooks/useFetch";
import { useAuthContext } from "./hooks/useAuthContext";
import { useDataContext } from "./hooks/useDataContext";
import ProfileSettings from "./pages/ProfileSettings";

const App = () => {
  const { user, dispatch, loading } = useAuthContext();
  const { data, setData } = useDataContext();
  const { fetchLists } = useFetch();

  useEffect(() => {
    const func = async () => {
      const lists = await fetchLists();
    };
    if (user) {
      func();
    }
  }, [user]);

  if (loading || (user && !data))
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="profile/:id" element={<IndividualProfile />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="edit/:id" element={<EditPage />} />
          <Route path="settings" element={<ProfileSettings />} />

        </Route>
      </Routes>
      <Toaster richColors />
    </div>
  );
};

export default App;
