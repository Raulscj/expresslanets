import * as path from "path";
import { DataSource } from "typeorm";
//Constants
import { DATABASE, PASSWORD, PORT_DB, ADMIN } from "../constants";

let entities = ["dist/entities/**/*.js"];
if (path.extname(__filename) === ".ts") {
  entities = ["src/entities/**/*.ts"];
}

const datasource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: ADMIN,
  password: PASSWORD,
  database: DATABASE,
  port: PORT_DB ? parseInt(PORT_DB) : 3306,
  entities,
  logging: true,
  synchronize: true,
});

export default datasource;
