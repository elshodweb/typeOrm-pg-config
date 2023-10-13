import { Router } from "express";
import User from "../controller/user.controller";

const profileRoute: Router = Router();

export default profileRoute.get("/", User.GET).post("/", User.POST);
