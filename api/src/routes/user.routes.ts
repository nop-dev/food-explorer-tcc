import { Router } from "express";

import { UserController } from "../controllers/UserController.js";
import { ensureAuthentication } from "../middlewares/ensureAuthentication.js";

const usersRoutes = Router();

const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/:user_id", ensureAuthentication, userController.update);
usersRoutes.get("/profile", ensureAuthentication, userController.profile);

export { usersRoutes };
