import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { json } from "express";
import logger from "../logger";

const middleWares = [
  morgan("tiny", { stream: { write: (m) => logger.http(m.split("\n")[0]) } }), //TODO: analizar
  helmet(),
  cors(),
  json(),
];

export default middleWares;
