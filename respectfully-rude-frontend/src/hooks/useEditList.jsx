import axiosInstance from "../../axiosInstance";
import React, { useState } from "react";
import { useDataContext } from "./useDataContext";
import { useNavigate } from "react-router-dom";

export const useEditCourse = () => {
  const [editError, setEditError] = useState(null);
  const { setData } = useDataContext();
  const navigate = useNavigate();

  const editCourse = async (newCourse, oldCourse) => {
    const updatedFormData = new FormData();

    if (
      newCourse.name === oldCourse.name &&
      newCourse.text === oldCourse.text
    ) {
      throw new Error("No changed detected");
    }

    try {
      const { data } = await axiosInstance.put(
        `course/edit/${oldCourse.id}`,
        updatedFormData,
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
  return { editCourse, editError, setEditError };
};
