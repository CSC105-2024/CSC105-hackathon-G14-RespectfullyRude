import type { Context } from "hono";

const deleteList = async (c: Context) => {
  const listId = Number(c.req.param("id"));
};
