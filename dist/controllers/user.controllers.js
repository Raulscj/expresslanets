"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = exports.view = void 0;
const datasource_1 = __importDefault(require("../datasource"));
const user_1 = require("../entities/user");
const logger_1 = require("../logger");
// Configuración del puerto
const PORT = Number(process.env.PORT) || 3000;
const view = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        message: `Server is running on port ${PORT}`,
    });
});
exports.view = view;
const createUser = (req, res) => {
    if ((req.query.firstName && req.query.lastName) ||
        (req.body.firstName && req.body.lastName)) {
        const user = new user_1.User();
        if (req.query.firstName && req.query.lastName) {
            user.firstName = String(req.query.firstName);
            user.lastName = String(req.query.lastName);
        }
        else {
            user.firstName = String(req.body.firstName);
            user.lastName = String(req.body.lastName);
        }
        datasource_1.default
            .getRepository(user_1.User)
            .save(user)
            .then((user) => res.send(user))
            .catch((error) => (0, logger_1.responseAndLogger)(res, error.message, 500));
    }
    else {
        res.status(400).send({
            message: `It is necessary to indicate the parameters 'firstName' and 'lastName' for the creation of a user`,
        });
    }
};
exports.createUser = createUser;
const getUsers = (req, res) => {
    const skip = Number(req.query.from) || 0;
    const take = Number(req.query.take) || 10;
    datasource_1.default
        .getRepository(user_1.User)
        .find({ skip, take })
        .then((users) => res.send(users))
        .catch((error) => (0, logger_1.responseAndLogger)(res, error.message, 500));
};
exports.getUsers = getUsers;
const updateUser = (req, res) => {
    if (req.query.id) {
        datasource_1.default
            .getRepository(user_1.User)
            .findOneByOrFail({ id: Number(req.query.id) })
            .then((user) => {
            if (req.body.firstName) {
                user.firstName = String(req.body.firstName);
            }
            if (req.body.lastName) {
                user.lastName = String(req.body.lastName);
            }
            datasource_1.default
                .getRepository(user_1.User)
                .save(user)
                .then((user) => res.send(user))
                .catch((error) => (0, logger_1.responseAndLogger)(res, error.message, 500));
        })
            .catch((error) => (0, logger_1.responseAndLogger)(res, error.message, 500));
    }
    else {
        res
            .status(400)
            .send({ message: `It is necessary to indicate the id of a user` });
    }
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    if (req.query.id) {
        datasource_1.default
            .getRepository(user_1.User)
            .delete({ id: Number(req.query.id) })
            .then((user) => res.send(user)) //TODO: no se valida si no consigue ningun Users
            .catch((error) => (0, logger_1.responseAndLogger)(res, error.message, 500));
    }
    else {
        res
            .status(400)
            .send({ message: `It is necessary to indicate the id of a user` });
    }
};
exports.deleteUser = deleteUser;
