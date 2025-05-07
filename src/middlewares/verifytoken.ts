import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET } from "../../constants";

const secret = String(SECRET);

const verifytoken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-access-token");

  if (token == null) {
    res.status(401).send(`No token specified`);
    res.end();
  } else {
    verify(token, secret, (err, payload) => {
      if (err || !payload) {
        res.status(401).send(`The token is not valid`);
        res.end();
      }

      res.locals.payload = payload; //TODO: analizar

      next();
    });
  }
};

export default verifytoken;
