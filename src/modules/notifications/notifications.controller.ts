import prisma from "../../services/prisma/prisma.service";
import { Request, Response } from "express";

export class NotificationsController {
  async create(req: Request, res: Response) {
    const {
      body: { userId, title, message },
    } = req;

    const notification = await prisma.notifications.create({
      data: {
        message,
        title,
        userId,
      },
    });

    if (userId) {
      await prisma.logs.create({
        data: {
          message: `notificação enviada para ${userId} [${new Date()}]`,
          userId,
        },
      });
    }

    return res.status(201).json({ notification });
  }
}
