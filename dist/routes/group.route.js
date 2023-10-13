"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const group_controller_1 = __importDefault(require("../controller/group.controller"));
const groupRoute = (0, express_1.Router)();
exports.default = groupRoute
    .get("/", group_controller_1.default.GET)
    .post("/", group_controller_1.default.POST);
