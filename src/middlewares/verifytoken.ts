import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET } from "../../constants";

const secret = String(SECRET);

const verifytoken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-access-token");

  if (token == null) {
    return res.status(401).send(`No token specified`);
  } else {
    verify(token, secret, (err, payload) => {
      if (err) {
        return res.status(401).send(`The token is not valid`);
      }

      res.locals.payload = payload; //TODO: analizar

      next();
    });
  }
};

export default verifytoken;
