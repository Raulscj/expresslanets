import { Router } from "express";

import users from "./users";
import documentation from './swagger'

const router = Router();

router.use("/users", users);
router.use("/docs", documentation);

export default router;
