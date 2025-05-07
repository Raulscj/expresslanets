import { Router } from "express";

import verifytoken from "../../../middlewares/verifytoken";
import {info, login, register} from '../../../controllers/auth.controller'

const router = Router();

router.post("/login", login);

router.get("/info", verifytoken, info);

router.post('/register', register);
export default router;
