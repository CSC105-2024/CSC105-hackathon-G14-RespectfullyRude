import type { Context } from "hono";
import * as userModel from "../../models/user.model.ts";
import { cloudinary } from "../../cloudinary/cloudinary.ts";

const uploadProfile = async (c: Context) => {
  try {
    const formData = await c.req.formData();
    const img = formData.get("img");

    const id = c.get("user_id");

    const img_id = await userModel.findImgId(id);

    if (img_id) {
      await cloudinary.uploader.destroy(img_id);
      console.log("deleted");
    }

    if (!(img instanceof File))
      throw new Error("Expected a File, but got something else.");

    const arrayBuffer = await img?.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = `data:${img?.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "RespectfullyRude/Profile",
    });

    const info = await userModel.uploadProfileAndID(
      id,
      result.secure_url,
      result.public_id
    );

    return c.json(
      {
        success: true,
        data: info,
        msg: `successful`,
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${(error as Error).message}`,
      },
      400
    );
  }
};

export { uploadProfile };
