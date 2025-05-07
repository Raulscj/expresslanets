"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
const server_1 = __importDefault(require("./server"));
const datasource_1 = __importDefault(require("./datasource"));
const logger_1 = __importDefault(require("./logger"));
//import { User } from "./entities/user";
// Configuración del puerto
const PORT = Number(process.env.PORT) || 3000;
// Creación del servicio
const server = new server_1.default({
    port: PORT,
    middleWares: middlewares_1.default,
    routes: [routes_1.default],
});
server.listen();
// Conexión a la base de datos
datasource_1.default
    .initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    /* const user = new User();
    user.firstName = "Nombre";
    user.lastName = "Apellido";

    const result = await datasource.getRepository(User).save(user);*/
    logger_1.default.info("Database connected");
}))
    .catch((err) => {
    logger_1.default.error("Error during Data Source initialization:", err);
});
