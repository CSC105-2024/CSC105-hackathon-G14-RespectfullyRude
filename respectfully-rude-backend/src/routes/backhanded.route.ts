import { Hono } from "hono";
import { createList } from "../controllers/backhanded/create.backhanded.ts";
import { verify } from "../middlewares/verify.ts";
import { editList } from "../controllers/backhanded/edit.backhanded.ts";
import { deleteList } from "../controllers/backhanded/delete.backhanded.ts";
import { getLists } from "../controllers/backhanded/get.backhanded.ts";
import { toggleList } from "../controllers/backhanded/toggle.backhanded.ts";

const backhandedRouter = new Hono();

backhandedRouter.use(verify);
backhandedRouter.post("/create", createList);
backhandedRouter.put("/edit/:id", editList);
backhandedRouter.delete("/delete/:id", deleteList);
backhandedRouter.get("/get", getLists);
backhandedRouter.patch("/toggle/:id", toggleList);

export { backhandedRouter };
