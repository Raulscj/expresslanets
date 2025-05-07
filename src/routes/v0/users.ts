import { Router } from "express";
import {
  //view,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../../controllers/user.controllers";
import verifytoken from "../../middlewares/verifytoken";

// Creación de la ruta
const router = Router();

//router.get("/", view);

router.get("/", verifytoken, getUsers);

router.post("/", verifytoken, createUser);

router.put("/", verifytoken, updateUser);

router.delete("/", verifytoken, deleteUser);

export default router;
