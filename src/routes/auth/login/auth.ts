import { Router } from "express";

import verifytoken from "../../../middlewares/verifytoken";
import {info, login, register} from '../../../controllers/auth.controller'

const router = Router();

router.post('/register', register);

router.post("/login", login);

router.get("/info", verifytoken, info);

export default router;
