import { Request, Response } from "express";
import typeorm from "../confs/typeorm";
import { Channel } from "../entities/channel.entity";
import { QueryFailedError } from "typeorm";
import { User } from "../entities/user.entity";

class Channels {
  async GET(req: Request, res: Response): Promise<Response> {
    const data: Channel[] | null = await typeorm.getRepository(Channel).find();

    if (data.length) {
      return res.json(data);
    } else {
      return res.status(404).json("Not found");
    }

  }

  async POST(req: Request, res: Response): Promise<Response> {
    const { name, userId } = req.body; // Изменили "user" на "userId" для передачи идентификатора пользователя

    if (!name || !userId) {
      return res
        .status(400)
        .json({ message: "You must send both name and userId!" });
    }

    try {
      // Проверяем, существует ли пользователь с указанным userId
      const user = await typeorm.getRepository(User).findOneBy({id:userId});
      console.log(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const channel = new Channel();

      channel.name = name;
      channel.user = user;

      const data = await typeorm.manager.save(channel);
      return res.json(data);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        return res
          .status(500)
          .json({ message: "Database Error", error: error.message });
      } else {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}

export default new Channels();
