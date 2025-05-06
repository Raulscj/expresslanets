import { Router } from "express";
import { view, createUser, getUsers } from "../controllers/user.controllers";

// Creación de la ruta
const router = Router();

router.get("/", view);

router.get("/users", getUsers);

router.post("/users", createUser);

export default router;
