import type { Context } from "hono";
import * as userModel from "../../models/user.model.ts";

const registerUser = async (c: Context) => {
  try {
    const body = await c.req.json();

    const existing = await userModel.findInfo(body.email);

    if (existing) {
      return c.json({ success: false, msg: "Email already exists" }, 409);
    }

    await userModel.register(body);
    return c.json({ success: true, msg: "Registered successfully" }, 201);
  } catch (error) {
    console.error(error);
    return c.json({ success: false, msg: "Failed to create user" }, 500);
  }
};

export { registerUser };
