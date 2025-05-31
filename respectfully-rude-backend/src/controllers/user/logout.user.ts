import type { Context } from "hono";
import { deleteCookie } from "hono/cookie";

const logoutUser = async (c: Context) => {
  deleteCookie(c, "rr_jwt");
  return c.json(
    {
      success: true,
      data: "cookie removed",
      msg: `successful`,
    },
    201
  );
};

export { logoutUser };
