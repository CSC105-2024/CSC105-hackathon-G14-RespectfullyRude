import axiosInstance from "@/axiosInstance";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useRegister = () => {
  const navigate = useNavigate();

  const registerUser = async (name, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      toast.error("password and confirmPassword must be the same");
      return;
    }
    try {
      const { data } = await axiosInstance.post(
        "user/register",
        { name: name, email: email, password: password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data) {
        toast.success("You account has been created");
      }

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return { registerUser };
};

export default useRegister;
