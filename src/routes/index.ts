import { Router } from "express";

import v0 from "./v0";
import auth from "./auth/login/auth";

const router = Router();

router.use("/v0", v0);
router.use("/auth", auth);

export default router;
