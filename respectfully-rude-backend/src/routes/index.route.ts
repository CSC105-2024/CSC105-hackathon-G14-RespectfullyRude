import { Hono } from "hono";
// import { backhandedRouter } from "./backhanded.route.ts";
import { userRouter } from "./user.route.ts";

const mainRouter = new Hono();

// mainRouter.route("/backhanded", backhandedRouter);
mainRouter.route("/user", userRouter);

export { mainRouter };
