import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useDataContext } from "./useDataContext";
import axiosInstance from "@/axiosInstance";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useLogout = () => {
  const { setData } = useDataContext();

  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const { data } = await axiosInstance.post("/user/logout");

      if (data.msg) {
        localStorage.removeItem("resrude_user");

        dispatch({ type: "LOGOUT" });
        setData(null);

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.msg);
    }
  };

  return { logout };
};
