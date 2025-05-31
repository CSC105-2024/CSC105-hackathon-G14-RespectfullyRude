import type { Context } from "hono";
import * as listModel from "../../models/compliment.model.ts";

const getLists = async (c: Context) => {
  const user_id = c.get("user_id");

  try {
    const lists = await listModel.getList(user_id);

    return c.json(
      {
        success: true,
        data: lists,
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
        msg: `${(error as Error).message}`,
      },
      500
    );
  }
};

export { getLists };
