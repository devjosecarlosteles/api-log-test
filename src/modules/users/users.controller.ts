import prisma from "../../services/prisma/prisma.service";
import { Request, Response } from "express";

export class UsersController {
  async create(req: Request, res: Response) {
    const user = await prisma.users.create({
      data: {
        name: "Jhon",
      },
    });

    // await prismaService.logs.create({
    //   data: {
    //     message: `usuário ${user.name} - criado com sucesso`,
    //     userId: user.id,
    //   },
    // });

    // console.log(await prismaService.users.findMany());

    return res.status(201).json(user);
  }
}
