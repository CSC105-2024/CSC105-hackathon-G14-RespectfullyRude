import type { Context } from "hono";
import type { EditUser } from "../../types/user.type.ts";
import * as userModel from "../../models/user.model.ts";
import bcrypt from "bcrypt";
import { deleteCookie } from "hono/cookie";

const editUser = async (c: Context) => {
  try {
    //TODO:
    const body: EditUser = await c.req.json();

    const id = c.get("user_id");

    const info = await userModel.updateInfo(body.name, body.email, id);

    if (body.password && body.newPassword) {
      const info = await userModel.findInfo(id);
      const valid = await bcrypt.compare(body.password, info!.password);

      if (!valid) throw new Error("Password is incorrect!!!");

      await userModel.updatePassword(body.newPassword, id);
      deleteCookie(c, "rr_jwt");
    }

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

export { editUser };
