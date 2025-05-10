import { Router } from "express";
import SwaggerUI from "swagger-ui-express";
import {Docs, DocsJSON} from '../../controllers/swagger.controller'

// Creación de la ruta
const router = Router();

router.use("/",SwaggerUI.serve, Docs);

router.get("/documentation.json", DocsJSON);

export default router;