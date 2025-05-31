import { Hono } from "hono";
import { registerUser } from "../controllers/user/register.user.ts";

const userRouter = new Hono();

userRouter.post("/register", registerUser);

export { userRouter };
