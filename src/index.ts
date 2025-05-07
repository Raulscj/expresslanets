import "reflect-metadata";
import middleWares from "./middlewares";
import router from "./routes";
import Server from "./server";
import datasource from "./datasource";
import logger from "./logger";
//import { User } from "./entities/user";

// Configuración del puerto
const PORT: number = Number(process.env.PORT) || 3000;

// Creación del servicio
const server = new Server({
  port: PORT,
  middleWares: middleWares,
  routes: [router],
});
server.listen();

// Conexión a la base de datos
datasource
  .initialize()
  .then(async () => {
    /* const user = new User();
    user.firstName = "Nombre";
    user.lastName = "Apellido";

    const result = await datasource.getRepository(User).save(user);*/
    logger.info("Database connected");
  })
  .catch((err) => {
    logger.error("Error during Data Source initialization:", err);
  });
