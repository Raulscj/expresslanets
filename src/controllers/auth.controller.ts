import { Router, Request, Response } from "express";
import { sign } from "jsonwebtoken";

import datasource from "../datasource";
import { responseAndLogger } from "../logger";
import Logins from '../entities/logins'
import { EXPIRES, SECRET } from "../../constants";

const router = Router();

//const expiresIn = EXPIRES ? String(EXPIRES) : "15m";
const expiresIn = typeof EXPIRES === "number" ? EXPIRES : "15m";

export const register = (req: Request, res: Response) => {
  const {username,password} = req.body;

  datasource
    .getRepository(Logins)
    .findOneByOrFail({ username })
    .then(() => {
      responseAndLogger(res, 'User already exists', 406);
    })
    .catch(() => {
      const user = new Logins();
      user.username = username;
      user.password = password;

      datasource
        .getRepository(Logins)
        .save(user)
        .then((user) => res.send(user))
        .catch((error) => responseAndLogger(res, error.message, 500));
    });
}

export const login = (req: Request, res: Response) => {
  const {username,password} = req.body;

  datasource
    .getRepository(Logins)
    .findOneByOrFail({ username })
    .then((user) => {
      if (user.validatePassword(password)) {
        sign({ id: user.id, username: user.username }, SECRET, { expiresIn }, (err, token) => {
          if (err || !token) {
            responseAndLogger(res, 'It was not possible to generate the token', 400);
          }
          return res.send({ token });
        });
      } else {
        responseAndLogger(res, 'Invalid password', 400);
      }
    })
    .catch(() => responseAndLogger(res, 'Invalid user', 400));
}

//Proof
export const info = (req: Request, res: Response) => {
  res.send(res.locals.payload);
};

export default router;
