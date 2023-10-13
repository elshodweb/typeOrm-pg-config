"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const profileRoute = (0, express_1.Router)();
exports.default = profileRoute.get("/", user_controller_1.default.GET).post("/", user_controller_1.default.POST);
