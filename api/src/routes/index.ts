import { Router } from "express";

import { sessionsRoutes } from "./sessions.routes.js";
import { usersRoutes } from "./user.routes.js";
import { dishesRoutes } from "./dishes.routes.js";

const routes = Router(); 

routes.use("/sessions", sessionsRoutes);
routes.use("/users", usersRoutes);
routes.use("/dishes", dishesRoutes);

export default routes;
