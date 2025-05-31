import type { Context } from "hono";
import * as listModel from "../../models/compliment.model.ts";
import { cloudinary } from "../../cloudinary/cloudinary.ts";

const deleteList = async (c: Context) => {
  const listId = Number(c.req.param("id"));
  const user_id = c.get("id");

  try {
    const img_id = await listModel.findImgId(listId, user_id);

    if (img_id) {
      await cloudinary.uploader.destroy(img_id);
      console.log("deleted");
    }

    const deletedList = await listModel.deleteList(listId, user_id);

    return c.json(
      {
        success: true,
        data: deletedList,
        msg: `successful`,
      },
      200
    );
  } catch (error) {
    console.error("Error deleting course:", error);
    return c.json(
      {
        success: false,
        message: "Failed to delete course",
      },
      400
    );
  }
};

export { deleteList };
