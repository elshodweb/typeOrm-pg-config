import { Router } from "express";
import groupController from "../controller/group.controller";

const groupRoute: Router = Router();

export default groupRoute
  .get("/", groupController.GET)
  .post("/", groupController.POST);
