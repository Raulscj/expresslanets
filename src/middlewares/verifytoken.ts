import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET } from "../../constants";

const secret = String(SECRET);

const verifytoken = (req: Request, res: Response, next: NextFunction) => {
  let token = req.header("x-access-token");

   // Si no está en "x-access-token", intenta obtenerlo desde "Authorization"
  if (!token) {
    const authHeader = req.header("Authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1]; // Extrae el token después de "Bearer"
    }
  }

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
