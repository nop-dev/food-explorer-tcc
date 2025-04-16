import { Router } from "express";

import { DishesController } from "../controllers/DishesController.js";
import { ensureAuthentication } from "../middlewares/ensureAuthentication.js";

const dishesRoutes = Router();
dishesRoutes.use(ensureAuthentication);

const dishesController = new DishesController();

dishesRoutes.post("/", dishesController.create);
dishesRoutes.put("/:dish_id", dishesController.update);
dishesRoutes.delete("/:dish_id", dishesController.delete);

export { dishesRoutes };
