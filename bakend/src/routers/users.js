import { Router } from "express";
import usersController from "../controllers/users.js";

const usersRouter = Router();

usersRouter.post("/", usersController.create);
usersRouter.get("/", usersController.readAll);
usersRouter.get("/:id", usersController.read);

usersRouter.put("/:id", usersController.update);

usersRouter.delete("/:id", usersController.delete);

export default usersRouter;
