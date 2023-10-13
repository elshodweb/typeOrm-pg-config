"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const channel_controller_1 = __importDefault(require("../controller/channel.controller"));
const channelRoute = (0, express_1.Router)();
exports.default = channelRoute
    .get("/", channel_controller_1.default.GET)
    .post("/", channel_controller_1.default.POST);
