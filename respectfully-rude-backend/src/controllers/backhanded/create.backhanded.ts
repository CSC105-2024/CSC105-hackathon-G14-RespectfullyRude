import type { Context } from "hono";
import { backhandedOutput, imgOutputUrl } from "../../utils/aiHelpers.ts";
import { cloudinary } from "../../cloudinary/cloudinary.ts";
import * as listModel from "../../models/compliment.model.ts";

const createList = async (c: Context) => {
  const formData = await c.req.formData();

  const id = c.get("user_id");
  const name = formData.get("name");
  const text = formData.get("text");
  const imgFile = formData.get("img");

  if (typeof name !== "string" || typeof text !== "string") {
    throw new Error("Invalid form data: name or text is not a string");
  }

  if (!imgFile || !(imgFile instanceof File)) {
    return c.text("No image uploaded or wrong field name", 400);
  }

  try {
    const arrayBuffer = await imgFile?.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const img = `data:${imgFile?.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(img, {
      folder: "RespectfullyRude/Generated",
    });

    const genOutput = await backhandedOutput(name, text, img);
    console.log(genOutput.text);

    const imgUrl = await imgOutputUrl(genOutput?.prompt, img);

    const list = await listModel.createList(
      name,
      result.secure_url,
      result.public_id,
      text,
      genOutput.name,
      genOutput.text,
      imgUrl,
      id
    );

    return c.json(
      {
        success: true,
        data: list,
        msg: `successful`,
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json(
      {
        success: false,
        data: null,
        msg:
          error instanceof Error
            ? error.message
            : "Could not create a new backhanded",
      },
      500
    );
  }
};

export { createList };
