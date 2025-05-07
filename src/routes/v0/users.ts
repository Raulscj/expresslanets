import { Router } from "express";
import {
  //view,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../../controllers/user.controllers";

// Creación de la ruta
const router = Router();

//router.get("/", view);

router.get("/", getUsers);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

export default router;
