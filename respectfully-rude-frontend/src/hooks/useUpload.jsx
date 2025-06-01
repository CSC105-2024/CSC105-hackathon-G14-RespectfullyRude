import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "@/axiosInstance";


export const useUploadProfile = () => {
  const { dispatch } = useAuthContext();

  const uploadProfile = async (file) => {
    const formData = new FormData();
    formData.append("img", file);

    try {
      const { data } = await axiosInstance.post("/user/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const user = JSON.parse(localStorage.getItem("resrude_user"));

      const newUser = { ...user, ...data.data };
      console.log(newUser);
      localStorage.setItem("resrude_user", JSON.stringify(newUser));
      

      dispatch({ type: "LOGIN", payload: newUser });
    } catch (error) {
      console.error(error.response.data.msg);
    throw new Error(e);
    }
  };

  return { uploadProfile };
};