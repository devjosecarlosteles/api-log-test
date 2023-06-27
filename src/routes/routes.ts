import { Router } from "express";
import { UsersController } from "../modules/users/users.controller";

const router = Router();

const usersController = new UsersController();

router.post("/users", usersController.create);

export default router;
