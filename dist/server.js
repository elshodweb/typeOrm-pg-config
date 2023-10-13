"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = __importDefault(require("./confs/typeorm"));
const routes_1 = require("./routes");
typeorm_1.default
    .initialize()
    .then(() => console.log("conected to db"))
    .catch((err) => console.log(err));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(9090, () => console.log("listening"));
