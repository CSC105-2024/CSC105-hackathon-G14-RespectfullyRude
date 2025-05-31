import { Hono } from "hono";
import { registerUser } from "../controllers/user/register.user.ts";
import { loginUser } from "../controllers/user/login.user.ts";
import { logoutUser } from "../controllers/user/logout.user.ts";
import { verify } from "../middlewares/verify.ts";
import { editUser } from "../controllers/user/edit.user.ts";

const userRouter = new Hono();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.put("/edit", verify, editUser);

export { userRouter };
