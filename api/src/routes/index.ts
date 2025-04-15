import { Router } from "express";

import { sessionsRoutes } from "./sessions.routes.js";
import { usersRoutes } from "./user.routes.js";

const routes = Router(); 

routes.use("/sessions", sessionsRoutes);
routes.use("/users", usersRoutes);

export default routes;
