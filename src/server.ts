import express, { Application } from "express";
import typeorm from "./confs/typeorm";
import { router } from "./routes";

typeorm
  .initialize()
  .then((): void => console.log("conected to db"))
  .catch((err) => console.log(err));

const app: Application = express();
app.use(express.json());
app.use(router);

app.listen(9090, (): void => console.log("listening"));
