import { DataSource } from "typeorm";
import path from "path";
const typeorm = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1290",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, "/../entities/*.entity.{ts,js}")],
  migrations: [],
});
console.log(12121);


export default typeorm;
