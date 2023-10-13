"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("../confs/typeorm"));
const user_entity_1 = require("../entities/user.entity");
class Users {
    async GET(req, res) {
        try {
            const data = await typeorm_1.default
                .createQueryBuilder(user_entity_1.User, "users")
                .leftJoinAndSelect("users.profile", "profile")
                .leftJoinAndSelect("users.channels", "channel")
                .getMany();
            if (data.length > 0) {
                return res.json(data);
            }
            else {
                return res.status(404).json("Not found");
            }
        }
        catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).json("Internal Server Error");
        }
    }
    async POST(req, res) {
        const { name, surename, age, profile } = req.body;
        const data = await typeorm_1.default
            .createQueryBuilder()
            .insert()
            .into(user_entity_1.User)
            .values({ name, surename, age, profile })
            .returning("*")
            .execute();
        if (data) {
            return res.json(data);
        }
        else {
            return res.status(404).json("Not found");
        }
    }
}
exports.default = new Users();
