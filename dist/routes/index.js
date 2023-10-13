"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const profile_route_1 = __importDefault(require("./profile.route"));
const user_route_1 = __importDefault(require("./user.route"));
const channel_route_1 = __importDefault(require("./channel.route"));
const router = (0, express_1.Router)();
exports.router = router;
router.use("/profile", profile_route_1.default);
router.use("/users", user_route_1.default);
router.use("/channel", channel_route_1.default);
