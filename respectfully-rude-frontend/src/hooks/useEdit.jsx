import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";
import axiosInstance from "@/axiosInstance";
import { useNavigate } from "react-router";

export const useEdit = () => {
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();

  const edit = async (name, email, oldPassword, newPassword) => {
    if (
      name === user.name &&
      email === user.email &&
      !oldPassword &&
      !newPassword
    ) {
      toast.error("Looks like your info is still the same.");
      return;
    }

    if (oldPassword === newPassword) {
      toast.error("Looks like your passwords are the same.");
      return;
    }

    try {
      const { data } = await axiosInstance.put("/user/edit", {
        name: name,
        email: email,
        password: oldPassword,
        newPassword: newPassword,
      });

      if (data && oldPassword && newPassword) {
        setTimeout(() => {
          localStorage.removeItem("resrude_user");
          dispatch({ type: "LOGOUT" });
          navigate("/");
        }, 3000);
      }

      const info = { ...user, ...data.data };
      localStorage.setItem("resrude_user", JSON.stringify(info));
      dispatch({ type: "LOGIN", payload: info });

      toast.success("Successfully changed");
    } catch (error) {
      console.log(error.response.data.msg);
      toast.error(error.response.data.msg);
    }
  };

  return { edit };
};
