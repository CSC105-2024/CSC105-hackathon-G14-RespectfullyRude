import React, { useState } from "react";
import { useDataContext } from "./useDataContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/axiosInstance";

export const useEditList = () => {
  const [editError, setEditError] = useState(null);
  const { setData } = useDataContext();
  const navigate = useNavigate();

  const edit = async (newList, oldList) => {
    if (newList.name === oldList.name && newList.text === oldList.text) {
      throw new Error("No changed detected");
    }

    const formData = new FormData();
    formData.append("name", newList.name);
    formData.append("text", newList.text);
    formData.append("img", newList.img.file);

    try {
      const { data } = await axiosInstance.put(
        `backhanded/edit/${oldList.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTimeout(() => {
        navigate("/dashboard/home");
      }, 2000);

      setData((prevData) => {
        const index = prevData.findIndex((list) => list.id === data.data.id);
        if (index === -1) return [...prevData, data.data];

        const updated = [...prevData];
        updated[index] = data.data;
        return updated;
      });

      return data;
    } catch (e) {
      console.log(e);
      setEditError(e?.response?.data?.error);
      throw new Error(e);
    }
  };
  return { edit };
};
