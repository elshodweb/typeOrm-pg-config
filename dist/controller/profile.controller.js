"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("../confs/typeorm"));
const profile_entity_1 = require("../entities/profile.entity");
const typeorm_2 = require("typeorm");
class Profiles {
    async GET(req, res) {
        const data = await typeorm_1.default.getRepository(profile_entity_1.Profile).find();
        if (data.length) {
            return res.json(data);
        }
        else {
            return res.status(404).json("Not found");
        }
    }
    async POST(req, res) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res
                .status(400)
                .json({ message: "You must send both username and password!" });
        }
        try {
            const data = await typeorm_1.default
                .createQueryBuilder()
                .insert()
                .into(profile_entity_1.Profile)
                .values({ username, password })
                .returning("*")
                .execute();
            if (data) {
                return res.status(201).json(data.raw[0]);
            }
            else {
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
        catch (error) {
            console.error("Error inserting user:", error);
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
exports.default = new Profiles();
