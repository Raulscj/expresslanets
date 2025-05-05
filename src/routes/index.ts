import { Router } from "express";

// Configuración del puerto
const PORT: number = Number(process.env.PORT) || 3000;

// Creación de la ruta
const router = Router();

router.get("/", async (_req, res) => {
  res.send({
    message: `Server is running on port ${PORT}`,
  });
});

export default router;
