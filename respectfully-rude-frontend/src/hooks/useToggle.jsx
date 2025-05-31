import axiosInstance from "@/axiosInstance";
import { useDataContext } from "./useDataContext";
import { toast } from "sonner";

export const useToggleList = () => {
  const { setData } = useDataContext();

  const toggleList = async (id) => {
    try {
      const { data } = await axiosInstance.patch(`/backhanded/toggle/${id}`);

      if (data) {
        toast.success("successfully toggled");
      }

      setData((prevData) => {
        const index = prevData.findIndex((list) => list.id === data.data.id);
        if (index === -1) return [...prevData, data.data];

        const updated = [...prevData];
        updated[index] = data.data;
        return updated;
      });

      return data;
    } catch (error) {
      console.error("Toggle error:", error);
      setToggleError(error.response?.data?.msg || "Failed to toggle list");
    }
  };

  return { toggleList };
};
