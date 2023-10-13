import { Request, Response } from "express";
import typeorm from "../confs/typeorm";
import { User } from "../entities/user.entity";
import { InsertQueryBuilder, InsertResult } from "typeorm";
import { Profile } from "../entities/profile.entity";
import { Channel } from "../entities/channel.entity";

class Users {
  async GET(req: Request, res: Response): Promise<Response> {
    try {
      const data: User[] = await typeorm
        .createQueryBuilder(User, "users")
        .leftJoinAndSelect("users.profile", "profile")
        .leftJoinAndSelect("users.channels", "channel")
        .getMany();

      if (data.length > 0) {
        return res.json(data);
      } else {
        return res.status(404).json("Not found");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json("Internal Server Error");
    }
  }

  async POST(req: Request, res: Response): Promise<Response> {
    const { name, surename, age, profile } = req.body;

    const data: InsertResult = await typeorm
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ name, surename, age, profile })
      .returning("*")
      .execute();

  
    

    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json("Not found");
    }
  }
}

export default new Users();
