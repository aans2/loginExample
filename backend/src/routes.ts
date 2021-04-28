import { Router } from "express";

import authMiddleware from "./app/middleware/authMiddleware";

import UserController from "./app/controllers/UserControllers";
import AuthController from "./app/controllers/AuthController";

const routes = Router();

routes.post("/users", UserController.store);
routes.post("/auth", AuthController.authenticate);
routes.get("/users", authMiddleware, UserController.index);

export default routes;
