import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/axiosInstance";
import { toast } from "sonner";

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post("user/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("resrude_user", JSON.stringify(data.data));

      dispatch({ type: "LOGIN", payload: data.data });
      navigate("/dashboard/home");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.msg);
    }
  };

  return { login };
};
