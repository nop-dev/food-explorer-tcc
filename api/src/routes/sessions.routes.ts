import { Router } from "express";
import { SessionsController } from "../controllers/SessionsController.js";
import { ensureAuthentication } from "../middlewares/ensureAuthentication.js";

const sessionsRoutes = Router();
const sessionsController = new SessionsController();  

sessionsRoutes.post("/create", sessionsController.create);
sessionsRoutes.post("/logout", ensureAuthentication, sessionsController.logout);

export { sessionsRoutes };
