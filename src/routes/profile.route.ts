import { Router } from "express";
import profileController from "../controller/profile.controller";

const profileRoute: Router = Router();

export default profileRoute
  .get("/", profileController.GET)
  .post("/", profileController.POST);
