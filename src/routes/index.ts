import { Router } from "express";
import profileRoute from "./profile.route";
import userRoute from "./user.route";
import channelRoute from "./channel.route";

const router: Router = Router();
router.use("/profile", profileRoute);
router.use("/users", userRoute);
router.use("/channel", channelRoute);
export { router };
