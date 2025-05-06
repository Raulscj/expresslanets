import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { json } from "express";

const middleWares = [morgan("tiny"), helmet(), cors(), json()];

export default middleWares;
