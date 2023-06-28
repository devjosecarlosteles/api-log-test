import prisma from "../../services/prisma/prisma.service";
import { Request, Response } from "express";

export class LogsController {
  async findAll(req: Request, res: Response) {
    if (!req.query.name) {
      return res.status(400).json({ message: "Nome de usuário inválido" });
    }

    const { Logs }: any = await prisma.users.findFirst({
      where: { name: req.params.name },
      include: { Logs: true },
    });

    return res.status(200).json({ logs: Logs });
  }
}
