import { Router } from "express";
import { UsersController } from "../modules/users/users.controller";
import { LogsController } from "../modules/logs/logs.controller";
import { NotificationsController } from "../modules/notifications/notifications.controller";

const router = Router();

// users

const usersController = new UsersController();

router.post("/users", usersController.create);

// logs

const logsController = new LogsController();

router.get("/logs", logsController.findAll);

// notifications

const notificationsController = new NotificationsController();

router.post("/notifications", notificationsController.create);

export default router;
