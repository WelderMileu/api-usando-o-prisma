import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class middleware {
  // Pagina inicial
  async index(request: Request, response: Response) {
    await response.status(200).json({ response: "index page" });
  }

  // Criando um novo usuario.
  async create(request: Request, response: Response) {
    const { name, age, email } = request.body;

    try {
      const newUser = await prisma.users.create({
        data: {
          name,
          age,
          email,
        },
      });

      return response
        .status(201)
        .json({ message: "Dados enviados com sucesso" });
    } catch (e) {
      return response.status(301).json({ error: e });
    }
  }

  // Listando todos os usuarios.
  async listUsers(request: Request, response: Response) {
    const listUser = await prisma.users.findMany();

    return response.json(listUser);
  }

  // Deletando usuario.
  async delete(request: Request, response: Response) {
    const id = request.body.id;

    try {
      const deleteUser = await prisma.users.delete({
        where: {
          id,
        },
      });

      return response.json({ message: "usuario deletado com sucesso" });
    } catch (e) {
      return response.json({ error: e });
    }
  }
}

export default new middleware();
