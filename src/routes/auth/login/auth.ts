import { Router, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import verifytoken from "../../../middlewares/verifytoken";
import { responseAndLogger } from "../../../logger";

import { EXPIRES, SECRET } from "../../../../constants";

const router = Router();

//const expiresIn = EXPIRES ? String(EXPIRES) : "15m";
const expiresIn = typeof EXPIRES === "number" ? EXPIRES : "15m";

router.post("/login", (_req: Request, res: Response) => {
  sign(
    { user: "anonymous", admin: false },
    SECRET,
    { expiresIn },
    (err, token) => {
      if (err) {
        return responseAndLogger(res,"It was not possible to generate the token" , 500)
      }

      return res.send({ token });
    },
  );
});

router.get("/info", verifytoken, (req: Request, res: Response) => {
  res.send(res.locals.payload);
});

export default router;
