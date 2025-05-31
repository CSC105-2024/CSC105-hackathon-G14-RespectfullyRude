import { AuthContext } from "@/contexts/AuthContext";
import React, { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
