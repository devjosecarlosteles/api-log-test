import prisma from "../../services/prisma/prisma.service";
import { Request, Response } from "express";

export class UsersController {
  async create(req: Request, res: Response) {
    const {
      body: { name },
    } = req;

    const user = await prisma.users.create({
      data: {
        name,
        Logs: {
          create: {
            message: `usuário: ${name} criado com sucesso`,
          },
        },
      },
      include: { Logs: true },
    });

    return res.status(201).json({ user });
  }
}
