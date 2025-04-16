import { Router } from "express";

import { DishesController } from "../controllers/DishesController.js";
import { ensureAuthentication } from "../middlewares/ensureAuthentication.js";
  
import multer from "multer";
const uploadAvatar = multer({ dest: 'uploads/avatars/' })

const dishesRoutes = Router();
dishesRoutes.use(ensureAuthentication);

const dishesController = new DishesController();

dishesRoutes.post("/", uploadAvatar.single('image'), dishesController.create);
dishesRoutes.put("/:dish_id", uploadAvatar.single('image'), dishesController.update);
dishesRoutes.delete("/:dish_id", dishesController.delete);

export { dishesRoutes };
