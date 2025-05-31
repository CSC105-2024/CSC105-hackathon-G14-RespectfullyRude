import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useDataContext } from "./useDataContext";
import axiosInstance from "@/axiosInstance";

export const useDelete = () => {
  const { data, setData } = useDataContext();

  const navigate = useNavigate();

  const deleteList = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/backhanded/delete/${id}`);

      if (data) {
        setTimeout(() => {
          navigate("/dashboard/home");
          setData((d) => d.filter((d) => d.id !== data.data.id));
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error");
    }
  };

  return { deleteList };
};
