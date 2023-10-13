"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("../confs/typeorm"));
const channel_entity_1 = require("../entities/channel.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
class Channels {
    async GET(req, res) {
        const data = await typeorm_1.default.getRepository(channel_entity_1.Channel).find();
        if (data.length) {
            return res.json(data);
        }
        else {
            return res.status(404).json("Not found");
        }
    }
    async POST(req, res) {
        const { name, userId } = req.body; // Изменили "user" на "userId" для передачи идентификатора пользователя
        if (!name || !userId) {
            return res
                .status(400)
                .json({ message: "You must send both name and userId!" });
        }
        try {
            // Проверяем, существует ли пользователь с указанным userId
            const user = await typeorm_1.default.getRepository(user_entity_1.User).findOneBy({ id: userId });
            console.log(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const channel = new channel_entity_1.Channel();
            channel.name = name;
            channel.user = user;
            const data = await typeorm_1.default.manager.save(channel);
            return res.json(data);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                return res
                    .status(500)
                    .json({ message: "Database Error", error: error.message });
            }
            else {
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }
}
exports.default = new Channels();
