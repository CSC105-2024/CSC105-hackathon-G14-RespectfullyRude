import type { Context } from "hono";
import * as userModel from "../../models/user.model.ts";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/token.ts";
import { setSignedCookie } from "hono/cookie";

const loginUser = async (c: Context) => {
  try {
    const body = await c.req.json();

    const info = await userModel.findInfo(body.email);
    if (!info) {
      return c.json({ success: false, msg: "Invalid email" }, 401);
    }

    const valid = await bcrypt.compare(body.password, info.password);

    if (!valid) {
      return c.json({ success: false, msg: "Invalid password" }, 401);
    }

    const token = generateToken(info.id);

    await setSignedCookie(c, "rr_jwt", token, process.env.COOKIE_SECRET_KEY!, {
      secure: false,
      httpOnly: true,
      maxAge: 700000,
    });

    const { id, password, ...rest } = info;

    return c.json(
      {
        success: true,
        data: { ...rest },
        msg: `Log in Successful`,
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json({ success: false, msg: "Failed to log in" }, 500);
  }
};

export { loginUser };
