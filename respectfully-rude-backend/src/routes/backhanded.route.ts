import { Hono } from "hono";
import { createList } from "../controllers/backhanded/create.backhanded.ts";
import { verify } from "../middlewares/verify.ts";
import { editList } from "../controllers/backhanded/edit.backhanded.ts";

const backhandedRouter = new Hono();

backhandedRouter.use(verify);
backhandedRouter.post("/create", createList);
backhandedRouter.put("/edit/:id", editList);

export { backhandedRouter };
