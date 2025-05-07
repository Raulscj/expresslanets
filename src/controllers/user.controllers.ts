import { Request, Response } from "express";
import datasource from "../datasource";
import { User } from "../entities/user";

// Configuración del puerto
const PORT: number = Number(process.env.PORT) || 3000;

export const view = async (req: Request, res: Response) => {
  res.send({
    message: `Server is running on port ${PORT}`,
  });
};

export const createUser = (req: Request, res: Response) => {
  if (
    (req.query.firstName && req.query.lastName) ||
    (req.body.firstName && req.body.lastName)
  ) {
    const user = new User();
    if (req.query.firstName && req.query.lastName) {
      user.firstName = String(req.query.firstName);
      user.lastName = String(req.query.lastName);
    } else {
      user.firstName = String(req.body.firstName);
      user.lastName = String(req.body.lastName);
    }

    datasource
      .getRepository(User)
      .save(user)
      .then((user) => res.send(user))
      .catch((error) => res.status(500).send({ message: error.message }));
  } else {
    res.status(400).send({
      message: `It is necessary to indicate the parameters 'firstName' and 'lastName' for the creation of a user`,
    });
  }
};

export const getUsers = (req: Request, res: Response) => {
  const skip = Number(req.query.from) || 0;
  const take = Number(req.query.take) || 10;

  datasource
    .getRepository(User)
    .find({ skip, take })
    .then((users) => res.send(users))
    .catch((error) => res.status(500).send({ message: error.message }));
};

export const updateUser = (req: Request, res: Response) => {
  if (req.query.id) {
    datasource
      .getRepository(User)
      .findOneByOrFail({ id: Number(req.query.id) })
      .then((user) => {
        if (req.body.firstName) {
          user.firstName = String(req.body.firstName);
        }
        if (req.body.lastName) {
          user.lastName = String(req.body.lastName);
        }
        datasource
          .getRepository(User)
          .save(user)
          .then((user) => res.send(user))
          .catch((error) => res.status(500).send({ message: error.message }));
      })
      .catch((error) => res.status(500).send({ message: error.message }));
  } else {
    res
      .status(400)
      .send({ message: `It is necessary to indicate the id of a user` });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  if (req.query.id) {
    datasource
      .getRepository(User)
      .delete({ id: Number(req.query.id) })
      .then((user) => res.send(user)) //TODO: no se valida si no consigue ningun Users
      .catch((error) => res.status(500).send({ message: error.message }));
  } else {
    res
      .status(400)
      .send({ message: `It is necessary to indicate the id of a user` });
  }
};
