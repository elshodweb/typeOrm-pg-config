import { Router } from "express";
import channelController from "../controller/channel.controller";

const channelRoute: Router = Router();

export default channelRoute
  .get("/", channelController.GET)
  .post("/", channelController.POST);
