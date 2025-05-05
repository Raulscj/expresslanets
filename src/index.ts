import middleWares from "./middlewares";
import router from "./routes";
import Server from "./server";

// Configuración del puerto
const PORT: number = Number(process.env.PORT) || 3000;

// Creación del servicio
const server = new Server({
  port: PORT,
  middleWares: middleWares,
  routes: [router],
});
server.listen();
