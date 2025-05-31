import React, { useState } from "react";
import { useDataContext } from "./useDataContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/axiosInstance";

export const useCreate = () => {
  const { setData } = useDataContext();
  const navigate = useNavigate();

  const create = async (course) => {
    //obj.val changes obj into arr
    const empty = Object.values(course).some((f) => f === "");

    if (empty) {
      throw new Error("Form Required!");
    }

    //to be continued
    const formData = new FormData();

    formData.append("name", course.name);
    formData.append("text", course.text);
    formData.append("img", course.img.file);

    console.log(course.img.file);

    try {
      const { data } = await axiosInstance.post("backhanded/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (data)
        setTimeout(() => {
          navigate("/dashboard/home");
        }, 2000);
      setData((d) => [...d, data.data]);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
  return { create };
};
