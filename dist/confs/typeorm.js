"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
const typeorm = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1290",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [path_1.default.join(__dirname, "/../entities/*.entity.{ts,js}")],
    migrations: [],
});
console.log(12121);
exports.default = typeorm;
