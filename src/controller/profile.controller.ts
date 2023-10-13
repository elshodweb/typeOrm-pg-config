import { Request, Response } from "express";
import typeorm from "../confs/typeorm";
import { Profile } from "../entities/profile.entity";
import { InsertQueryBuilder, InsertResult, QueryFailedError } from "typeorm";

class Profiles {
  async GET(req: Request, res: Response): Promise<Response> {
    const data: Profile[] | null = await typeorm.getRepository(Profile).find();

    if (data.length) {
      return res.json(data);
    } else {
      return res.status(404).json("Not found");
    }
  }

  async POST(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "You must send both username and password!" });
    }

    try {
      const data = await typeorm
        .createQueryBuilder()
        .insert()
        .into(Profile)
        .values({ username, password })
        .returning("*")
        .execute();

      if (data) {
        return res.status(201).json(data.raw[0]);
      } else {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } catch (error) {
      console.error("Error inserting user:", error);

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

export default new Profiles();
